import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import './Search.css'

const Search = () => {
  return (
    <div>
      <Header />
      <div className="search-wrapper">
        <div className="search-container flex-row">
            <div className="banner-section-1">
                Banner Ad
            </div>
            <div className="table">
                <table>
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Link</th>
                            <th>Price</th>
                            <th>PPU</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Rice</td>
                            <td>www.amazon.com</td>
                            <td>$10</td>
                            <td>$1.2</td>
                            <td><button className='buy'>Buy Now</button></td>
                        </tr>
                        <tr>
                            <td>Rice</td>
                            <td>www.amazon.com</td>
                            <td>$10</td>
                            <td>$1.2</td>
                            <td><button className='buy'>Buy Now</button></td>
                        </tr>
                        <tr>
                            <td>Rice</td>
                            <td>www.amazon.com</td>
                            <td>$10</td>
                            <td>$1.2</td>
                            <td><button className='buy'>Buy Now</button></td>
                        </tr>
                        <tr>
                            <td>Rice</td>
                            <td>www.amazon.com</td>
                            <td>$10</td>
                            <td>$1.2</td>
                            <td><button className='buy'>Buy Now</button></td>
                        </tr>
                        <tr>
                            <td>Rice</td>
                            <td>www.amazon.com</td>
                            <td>$10</td>
                            <td>$1.2</td>
                            <td><button className='buy'>Buy Now</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="banner-section-2">
                Banner Ad
            </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Search
