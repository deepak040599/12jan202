import React from 'react'
import styled from 'styled-components'
import logo from '../img/logo1.svg'
import hero from '../img/hero.jpg';
import search from '../img/search.svg'
// eslint-disabled
function Header() {
    return (
        <HeaderStyled>
            <nav className="navigation">
                <div className="nav-wrapper">
                    <div className="logo">
                        <img src={logo}alt=''/>
                    </div>
                    <ul>
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">Near Jobs </a>
                        </li>
                        <li>
                            <a href="#">Find Jobs</a>
                        </li>
                        <li>
                            <a href="#">News</a>
                        </li>
                        <li>
                            <a href="#">Contact</a>
                        </li>
                    </ul>
                    <a href="#" className="cta-btn">+ Create Account</a>
                </div>
            </nav>
            <div className="header-content">
                <h1>
                    Over <span>10000</span> Jobs available <br />
                    You can choose the dream Jobs
                 </h1>
                 <p className="main-para">
                     Find Great job For Building Your Bright Career.have many Job In This Place
                 </p>
                 <div className="input-control">
                     <input type="text" placeholder='Job Title Or Keywords'/>
                     <select name="location" id="location">
                         <option value="">mumbai</option>
                         <option value="">chennai</option>
                         <option value="">gurgram</option>
                         <option value="">chandigarh </option>
                         <option value="">Delhi ncr</option>
                     </select>
                     <select name="jobs" id="jobs">
                         <option value="dev">Web developer </option>
                         <option value="dev">Android Developer</option>
                         <option value="dev">AI and ML engineer</option>
                         <option value="dev">Graphic Designing </option>
                         <option value="dev">Logo Designing</option>
                     </select>
                     <button className='search-btn'>
                         <img src={search} alt="" />
                     </button>
                 </div>
            </div>
        </HeaderStyled>
    )
}


const HeaderStyled = styled.header`
        min-height:90vh;
        position:relative;
        background:linear-gradient(to top,rgba(0,0,0,0.2),rgba(0,0,0,0.5)) ,url(${hero}) no-repeat;
       
        .navigation{
            border-bottom: 1px solid #f4f3f773;
            .nav-wrapper{
                margin:0 20rem;
                display:flex;
                justify-content:space-between;
                align-items:center;
                min-height:10vh;
            }
            .logo{
                width:50px;
            }
            ul{
                display:flex;
                align-items:center;
                li{
                    margin:0 1rem;
                }
            }
            .cta-btn{
                display:inline-block;
                background-color:var(--color-primary);
                padding:1rem 1.7rem;
                border-radius:7px;
                text-align:center;
            }
            a{
                color:var(--color-white);
            }
        }

        .header-content{
            position :absolute;
            top:50%;
            left:50%;
            transform:translate(-50%,-50%);
            text-align:center;
            width:60%;
            h1{
                font-size:3rem;
                span{
                    font-size:4rem;
                    color:var(--color-primary);
                }
            }
            .main-para{
                padding:2rem;
                color:var(--color-white);
            }
            .input-control{
                display:flex;
                justify-content:center;
                width:100%;
                input,select{
                    background-color:var(--color-white);
                    padding:1.4rem;
                    outline:none;
                    border:none;
                    margin-right:10px;
                    border-radius:7px;
                    font-size:inherit;
                    width:40%;
                    color:#a1a1a1;
                    font-weight:500;
                }
                input[type="text"]:placeholder{
                    color:#a1a1a1;
                }
            }

            .search-btn{
                background-color:var(--color-primary);
                outline:none; 
                border:none;
                padding:.5rem 2rem;
                dispaly:flex;
                align-items:center;
                justify-content:center;
                border-radius:7px;
                cursor:pointer;
            }
        }
`;
export default Header
