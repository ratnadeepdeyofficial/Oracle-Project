import React, { useState } from "react";
import "./Shop.css";
import ImgAsset from "../public";
import { Link } from "react-router-dom";
import Search1 from "./SmallCompo/Search1";
import Search2 from "./SmallCompo/Search2";
import Search3 from "./SmallCompo/Search3";
import Search4 from "./SmallCompo/Search4";
import Search5 from "./SmallCompo/Search5";
import Search6 from "./SmallCompo/Search6";
import Search7 from "./SmallCompo/Search7";
import Search8 from "./SmallCompo/Search8";

export default function Shop() {
  const [searchText, setsearchText] = useState("Search products");
  const [products, setProducts] = useState([]);
  const handleSearchChange = (e) => {
    setsearchText(e.target.value);
  };
  const handleSearch = async () => {
    console.log(searchText);
    await fetch(`https://fakestoreapi.com/products/category/${searchText}`)
      .then((res) => res.json())
      .then((json) => {
        setProducts(json);
      })
      .catch((e) => console.log(e));
  };
  return (
    <div className="Shop_Shop">
      <div className="Footer">
        <div className="Background" />
        <div className="Rectangle85" />
        <span className="_2020TanahAirStudioAllrightsreserved">
          @2020 TanahAir Studio. All rights reserved.
        </span>
        <span className="PrivacyPolicy">Privacy Policy</span>
        <span className="TermsandCondition">Terms and Condition</span>
        <div className="SocialMedia">
          <div className="Socmed">
            <div className="Container" />
            <span className="Yt">Yt</span>
          </div>
          <div className="Socmed_1">
            <div className="Container_1" />
            <span className="Fb">Fb</span>
          </div>
          <div className="Socmed_2">
            <div className="Container_2" />
            <span className="Tw">Tw</span>
          </div>
          <div className="Socmed_3">
            <div className="Container_3" />
            <span className="Ig">Ig</span>
          </div>
        </div>
        <span className="Dealerz">Dealerz.</span>
      </div>
      <div className="Form">
        <div className="Container_4" />
        <div className="Form_1">
          <div className="Container_5" />
          <span className="Insertyourmailhere">Insert your mail here</span>
        </div>
        <span className="LeverageagileframeworkstoprovidearobustsynopsisforhighleveloverviewsIterativeapproachestocorporatestrategyfoster">
          Leverage agile frameworks to provide a robust synopsis for high level
          overviews. Iterative approaches to corporate strategy foster{" "}
        </span>
        <span className="JoinOurNewsLetters">Join Our News Letters</span>
      </div>
      <div className="Shop_1">
        <div className="Sidebar">
          <div className="Searchbar">
            <div className="Container_6" />
            <div className="Search">
              <img
                className="Vector"
                src={ImgAsset.Shop_Vector}
                style={{ cursor: "pointer" }}
                onClick={handleSearch}
              />
            </div>
            <span className="Searchproducts">
              <input
                type="text"
                placeholder="Search products"
                onChange={handleSearchChange}
                style={{
                  border: "none",
                  backgroundColor: "transparent",
                  resize: "none",
                  outline: "none",

                  fontFamily: "DM Sans",

                  fontWeight: "700",
                }}
              />
            </span>
          </div>
          <div className="Price">
            <span className="Price_1">Price</span>
            <div className="Filters">
              <img className="Line" src={ImgAsset.Shop_Line} />
              <div className="Ellipse" />
              <div className="Ellipse_1" />
            </div>
            <span className="Range">Range</span>
            <span className="_520">$5-$20</span>
            <div className="Filter">
              <img className="Vector_1" src={ImgAsset.Shop_Vector_1} />
            </div>
          </div>
          <div className="ProductCategories">
            <span className="ProductCategories_1">Product Categories</span>
            <div className="Grocery">
              <span className="CoatandJackets">Coat and Jackets</span>
              <div className="ArrowChevronRight">
                <img className="Vector_2" src={ImgAsset.Shop_Vector_2} />
              </div>
            </div>
            <div className="Grocery_1">
              <span className="Dressses">Dressses</span>
              <div className="ArrowChevronRight_1">
                <img className="Vector_3" src={ImgAsset.Shop_Vector_3} />
              </div>
            </div>
            <div className="Grocery_2">
              <span className="Playsuit">Playsuit</span>
              <div className="ArrowChevronRight_2">
                <img className="Vector_4" src={ImgAsset.Shop_Vector_4} />
              </div>
            </div>
            <div className="Grocery_3">
              <span className="Short">Short</span>
              <div className="ArrowChevronRight_3">
                <img className="Vector_5" src={ImgAsset.Shop_Vector_5} />
              </div>
            </div>
            <div className="Grocery_4">
              <span className="Top">Top</span>
              <div className="ArrowChevronRight_4">
                <img className="Vector_6" src={ImgAsset.Shop_Vector_6} />
              </div>
            </div>
            <div className="Grocery_5">
              <span className="Bottoms">Bottoms</span>
              <div className="ArrowChevronRight_5">
                <img className="Vector_7" src={ImgAsset.Shop_Vector_7} />
              </div>
            </div>
          </div>
          <div className="FeaturedProduct">
            <span className="FeaturedProduct_1">Featured Product</span>
            <div className="List">
              <div className="Image" />
              <span className="TropicalPlaysuit">Tropical Playsuit</span>
              <span className="_100">$100</span>
            </div>
            <div className="List_1">
              <div className="Image_1" />
              <span className="TropicalPlaysuit_1">Tropical Playsuit</span>
              <span className="_100_1">$100</span>
            </div>
            <div className="List_2">
              <div className="Image_2" />
              <span className="TropicalPlaysuit_2">Tropical Playsuit</span>
              <span className="_100_2">$100</span>
            </div>
            <div className="List_3">
              <div className="Image_3" />
              <span className="TropicalPlaysuit_3">Tropical Playsuit</span>
              <span className="_100_3">$100</span>
            </div>
            <div className="List_4">
              <div className="Image_4" />
              <span className="TropicalPlaysuit_4">Tropical Playsuit</span>
              <span className="_100_4">$100</span>
            </div>
            <div className="List_5">
              <div className="Image_5" />
              <span className="TropicalPlaysuit_5">Tropical Playsuit</span>
              <span className="_100_5">$100</span>
            </div>
          </div>
        </div>

        <Search1 />
        <Search2 />
        <Search3 />
        <Search4 />
        <Search5 />
        <Search6 />
        <Search7 />
        <Search8 />
      </div>
      <div className="Hero">
        <div className="Container_7" />
        <div className="MaskGroup">
          <div className="Container_8" />
          <div className="Ellipse153" />
          <div className="Ellipse155" />
          <div className="Ellipse154" />
          <div className="Ellipse156" />
          <div className="Ellipse158" />
          <div className="Ellipse159" />
          <div className="Ellipse157" />
        </div>
        <span className="HomeShoppingYourChoice">
          Home Shopping, Your Choice!
        </span>
        <span className="Loremipsumdolorsitametconsecteturadipiscingelitseddoeiusmodtemporincididuntutlaboreetdoloremagnaaliqua">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br />
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
        </span>
      </div>
      <div className="Navbar">
        <div className="Container_9" />
        <div className="CallCentre">
          <div className="Phone">
            <img className="Vector_16" src={ImgAsset.Shop_Vector_16} />
          </div>
          <span className="CallCenter">Call Center</span>
        </div>
        <div className="CallCentre_1">
          <div className="TruckDelivery">
            <img className="Vector_17" src={ImgAsset.Shop_Vector_17} />
          </div>
          <span className="ShippingReturns">Shipping & Returns</span>
        </div>
        <div className="Container_10" />
        <Link to={"/home"}>
          <span className="Dealerz_1">Dealerz.</span>
        </Link>
        <div className="Searchbar_1">
          <div className="Container_11" />
          <div className="Search_1">
            <img
              className="Vector_18"
              src={ImgAsset.Shop_Vector_18}
              style={{ cursor: "pointer" }}
            />
          </div>
          <span className="Searchwhatyouneed">
            {" "}
            <input
              type="text"
              style={{
                border: "none",
                backgroundColor: "transparent",
                resize: "none",
                outline: "none",

                fontFamily: "DM Sans",

                fontWeight: "700",
              }}
              placeholder="Search what you need"
            />
          </span>
        </div>
        <div className="Menu">
          <div className="UserProfile2">
            <div className="Group">
              <img className="Vector_19" src={ImgAsset.Shop_Vector_19} />
              <img className="Vector_20" src={ImgAsset.Shop_Vector_20} />
            </div>
          </div>
          <div className="NotificationBell">
            <img className="Vector_21" src={ImgAsset.Shop_Vector_21} />
          </div>
          <div className="Heart_8">
            <img className="Vector_22" src={ImgAsset.Shop_Vector_22} />
          </div>
          <div className="ShoppingCart">
            <img className="Vector_23" src={ImgAsset.Shop_Vector_23} />
          </div>
          <div className="Badge">
            <div className="Container_12" />
            <span className="_3">3</span>
          </div>
        </div>
        <div className="Categories">
          <Link to="/shop">
            {" "}
            <span className="Shop_2">Shop</span>
          </Link>
          <Link to="/productdetail">
            <span className="Promo">Promo</span>
          </Link>
          <span className="About">About</span>
          <span className="Blog">Blog</span>
        </div>
      </div>
    </div>
  );
}
