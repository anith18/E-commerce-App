import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import { Form, InputGroup, Button, Container } from "react-bootstrap";

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);

  const handleSearch = () => {
    if (search.trim()) {
      console.log("Searching for:", search); // ✅ Replace this with actual search logic
    }
  };

  if (!showSearch) return null;

  return (
    <Container className="mt-3">
      <div className="d-flex justify-content-center border-top border-bottom py-2">
        <InputGroup className="w-75">
          {/* Search Input Field */}
          <Form.Control
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="form-control"
          />
          
          {/* Search Button - Triggers handleSearch */}
          <Button variant="outline-dark" onClick={handleSearch}>
            <img onClick={setShowSearch(true)} src={assets.search_icon} alt="Search" className="w-5" />
          </Button>
        </InputGroup>

        {/* Close Button to Hide Search Bar */}
        <Button variant="outline-light" className="ms-2" onClick={() => setShowSearch(false)}>
          ✖
        </Button>
      </div>
    </Container>
  );
};

export default SearchBar;
