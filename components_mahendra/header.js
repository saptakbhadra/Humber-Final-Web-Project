class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <style>
            *{
                padding: 0;
                margin: 0;
                font-family: 'Poppins';
            }
            body {
                background-color: #c8d8e4;
                /* background-image: url("/images_mahendra/bgimage.jpg"); */
                background-repeat: no-repeat;
                background-size: cover;
            }
            header {
                text-align: center;
                background-color: black;
                display: flex;
                align-items: center;
                position:fixed;
                width:100%;
                top: 0;
                border-bottom: 1px solid rgb(231, 225, 225);
            }
            /*Making logo float left on the header */
            #logo{
                margin-left: 20px;
                width: auto;
                height: 35px;
            } 
            nav{
                text-align: center;
                margin: 0 auto;
            }

            #profile{
                margin-right: 20px
            }
            /* Displaying nav elements at the center*/
            ul {
                list-style-type: none;
                text-align: center;
                display: inline-block;
                padding: 22px 110px;
                font-size: 18px;
            }
            li {
                float: left;
            }
            li a {
                display: block;
                color: white;
                text-align: center;
                padding: 15px 30px;
                text-decoration: none;
            }
            li:last-child{
                float: right;
            }
            nav a:link {
                color: orange;
            }
            nav a:visited {
                color: white;
            }
            /* Adding some selectors for anchor tag to style*/
            nav a:hover,
            nav a:focus {
                color: rgb(0, 0, 255)
            }

            .navicons{
                color: white;
                padding: 10px
            }
        </style>
        <header>
            <a href="/index.html"><img src="images_mahendra/logo.png" alt="logo" id="logo" /></a>
            <nav>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Places</a></li>
                <li><a href="#">Food</a></li>
                <!--<li><a href="Groceries.html">Groceries</a></li>-->
                <li><a href="#">Events</a></li>
                <li></li>
            </ul>
            </nav>
            <!--adding profile and logoff icons at the right side of header-->
            <div id="profile">
            <a href="login.html" class="navicons"><i class="fa-regular fa-user"></i></a>
            <a href="login.html" class="navicons"><i class="fa-solid fa-right-from-bracket"></i></i></a>
            </div>
        </header>
      `;
    }
  }
  
  customElements.define('header-component', Header);