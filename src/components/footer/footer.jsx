import "./footer.css";
import { FaFacebook } from "react-icons/fa";
import { TiSocialInstagram } from "react-icons/ti";

export function Footer() {
  return (
    <div className="footer">
      <div className="flex flex-row space-between">
        <div className="flex flex-col gap1">
          <h3 className="Contact-title">Contact</h3>
          <div>27 Avenue Habib Bourguiba, 2080 Ariana, Tunisie</div>
          <div>Tel: (+216) 71 718 932</div>
          <div>&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(+216) 22 796 932</div>

          <div>E-mail: contact@xiaomistore.tn</div>
        </div>
        <div className="flex flex-row  gap2">
          <div className="flex flex-col">
            <h3>Restons en contect</h3>
            <div className="flex flex-row gap1">
              <input type="email" placeholder="Enter your email here..." />
              <button type="button">Subscribe</button>
            </div>
          </div>
          <div className="flex flex-col ">
            <h3>Suivez nous</h3>
            <div className="flex flex-row gap1 align-item-center">
              <FaFacebook style={{ height: "35px", width: "35px" }} />
              <TiSocialInstagram style={{ height: "40px", width: "40px" }} />
            </div>
          </div>
        </div>
      </div>
      <hr className="my-2" />
      <div className="flex justify-start" style={{marginBottom:"20px"}}>
        © 2022 Ariatech Digital Store. All Rights Reserved.
      </div>
    </div>
  );
}
