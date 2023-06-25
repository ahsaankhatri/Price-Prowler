import React from "react";
import "./Hero.css"
import "../Header/Header.css"
import CountUp from "react-countup";

const Hero = () => {
    return(
        <section className="hero-wrapper">
                <div className="h-container">
                    <div className="hero-main">
                        <div className="hero-title">
                            <h1>
                            Best Price <br />
                            Largest Quantity!
                            </h1>
                        </div>

                        <div className="hero-des">
                            <p>
                            Find the cheapest items for sale online by the pound, ounce, gallon, quart, and more! <br/>
                            From Over Multiple venders
                            </p>
                        </div>

                        <div className="flex-row new-row">
                        <div className="input">
                            <input type="text" placeholder="Product Name"className="serach-bar" />
                        </div>

                        <div className="unit">
                            <select name="unitList" className="unitList">
                                <option selected value="">Unit</option>
                                <option value="count">Count</option>
                                <optgroup label="Weights &amp; Volumes">
                                    <option value="Lb">Pounds</option>
                                    <option value="Oz">Ounces</option>
                                    <option value="Kg">Kilograms</option>
                                    <option value="Gram">Grams</option>
                                    <option value="Mg">Milligrams</option>
                                    <option value="Fluid_Ounce">Fluid Ounces</option>
                                    <option value="Gallon">Gallons</option>
                                    <option value="Liter">Liters</option>
                                    <option value="Milliliter">Milliliters</option>
                                    <option value="Cup">Cups</option>
                                    <option value="Quart">Quarts</option>
                                    <option value="Pint">Pints</option>
                                </optgroup>
                                <optgroup label="Computer Measurements">
                                    <option value="Terabyte">Terabytes (TB)</option>
                                    <option value="Gigabyte">Gigabytes (GB)</option>
                                    <option value="Megabyte">Megabytes (MB)</option>
                                </optgroup>
                            </select>
                        </div>
                            <button>Check</button>
                        </div>


                            <div className="flex-row Numbers">
                            <div className="col-2 stats1">
                                <span>
                                    <CountUp start={0} end={200} duration={3}/>
                                    <span>K+ </span>
                                </span>
                                <span>Product Searched</span>
                            </div>

                            <div className="stats2">
                                <span>
                                    <CountUp start={0} end={5} duration={3}/>
                                    <span>K+ </span>
                                </span>
                                <span>Happy Customers</span>
                            </div>

                            <div className="stats3">
                                <span>
                                    <CountUp start={0} end={3} duration={5}/>
                                    <span>+ </span>
                                </span>
                                <span>Multiple Vendors</span>
                            </div>
                            </div>
                    </div>
                </div>
        </section>
    )
}

export default Hero;