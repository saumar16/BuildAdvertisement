import React from "react";
import "../styles/share.css";

function Share() {
  return (
    <div className="share">
      <ul>
        <li>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="bi bi-facebook" title="facebook"></i>
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="bi bi-twitter" title="twitter"></i>
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="bi bi-instagram" title="instagram"></i>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Share;
