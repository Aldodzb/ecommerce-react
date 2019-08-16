import React from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  FormInput
} from "shards-react";
import { Link } from "react-router-dom";
import Badge from "@material-ui/core/Badge";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch } from "react-redux";

import "./toolbar.css";

const useStyles = makeStyles(theme => ({}));

export function Toolbar(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const state = {
    dropdownOpen: false,
    collapseOpen: false
  };

  return (
    <div id="layout">
      <Navbar type="dark" theme="primary" expand="md">
        <NavbarBrand>
          {
            <Link to="/" style={{ color: "white" }}>
              Odiazon
            </Link>
          }
        </NavbarBrand>
        <Nav navbar style={{ width: "100%" }}>
          {/* SEARCH INPUT */}
          <InputGroup seamless>
            <InputGroupAddon type="prepend">
              <InputGroupText>
                <FontAwesomeIcon icon={faSearch} />
              </InputGroupText>
            </InputGroupAddon>
            <FormInput className="border-0" placeholder="Search..." />
          </InputGroup>
        </Nav>

        <Nav navbar style={{ float: "left" }}>
          <NavItem>
            {/*<NavLink active href="#">
                  Active
                </NavLink>*/}
            <Link
              to="/products"
              onClick={() => dispatch({ type: "REFRESH_UNSEEN" })}
              style={{ color: "white", "white-space": "nowrap" }}
            >
              <NavLink active>
                <Badge
                  badgeContent={props.unseenProducts}
                  className={classes.margin}
                  color="secondary"
                >
                  View All Products
                </Badge>
              </NavLink>
            </Link>
          </NavItem>
          <NavItem>
            <NavLink active>
              <Link
                to="/products/add"
                style={{ color: "white", "white-space": "nowrap" }}
              >
                Add Product
              </Link>
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
}

const mapStateToProps = state => ({
  unseenProducts: state.counters.newProducts
});

export default connect(mapStateToProps)(Toolbar);
