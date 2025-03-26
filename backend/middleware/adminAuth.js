import jwt from 'jsonwebtoken';

const adminAuth = async (req, res, next) => {
  console.log("token recieved:",req.headers.token)
  try {
    const token = req.headers.token;
    
    if (!token) {
      return res.json({ success: false, message: "Not Authorized. Login Again." });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (decoded !== process.env.ADMIN_EMAIL+process.env.ADMIN_PASSWORD) {
      return res.json({ success: false, message: "Not decoded. Login Again." });
    }
    next();
  } catch (error) {
    console.error("admin auth error");

    return res.json({ success: false, message: error.message});
  }
};

export default adminAuth;
