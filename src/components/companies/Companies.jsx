import React from "react";
import "./Companies.css"
import "../Header/Header.css"

const Companies = () => {
    return(
        <section className="c-wrapper">
            <div className="flex-row h-container">
                <div className="col-2 amazon">
                    <img src="./amazon.png" alt="amazon-logo" />
                </div>
                <div className="col-3 walmart">
                    <img src="./walmart.png" alt="walmart-logo" />
                </div>
                <div className="col-3 costco">
                    <img src="./costco.png" alt="costco-logo" />
                </div>
                <div className="col-4 dollartree">
                    <img src="./dollartree.png" alt="dollar-tree-logo" />
                </div>
            </div>
        </section>
    )
}

export default Companies