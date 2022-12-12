class Footer extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <style>
          footer {
            text-align: center;
            background-color: black;
            color: white;
            /* position: absolute; */
            width: 100%;
            bottom: 0;
          }
          #footlist{
            display: flex;
            flex-direction: row;
            justify-content: center;
          }
          .footdiv{
            padding: 50px 100px;
          }
          .foothead{
            padding-bottom: 35px;
            font-size: 18px;
            font-weight: 400;
          }
          footer a{
            text-decoration: none;
            color: white;
          }
          footer a:hover{
            color: orange;
          }
          /*style for copyright below footer*/
          #copyr{
            clear: left;
            padding-top: 20px;
            padding-bottom: 30px;
            border-top: 1px solid white;
            font-size: 12px;
          }
          #copyr a{
            text-decoration: underline;
          }
        </style>
        <footer>
            <div id="footlist">
                <div class="footdiv">
                    <p class="foothead">Learn More</p>
                    <a href="../History.html">History</a><br><br>
                    <a href="../Groceries.html">Groceries</a><br><br>
                    <a href="../index_utsa.html">Merchandise</a><br><br>
                </div>
                <div class="footdiv">
                    <p class="foothead">About Us</p>
                    <a href="../team_aashish.html">Team</a><br><br>
                    <a href="../Contact.html">Contact</a><br><br>
                    <a href="../reviews_mahendra.html">Reviews</a><br><br>
                </div>
                <div class="footdiv"> 
                    <p class="foothead">Follow Us</p>
                    <a href="#"><i class="fa-brands fa-instagram"></i></a><br><br>
                    <a href="#"><i class="fa-brands fa-facebook"></i></a><br><br>
                </div>
            </div>
            <!--copy right at the end of footer-->
            <div id="copyr">
            Copyright &copy; 2022 Welcome to Canada<br />
            <a href="mailto:welcometocanada@w2c.ca">welcometocanada@w2c.ca</a>
            </div>
        </footer>
      `;
    }
  }
  
  customElements.define('footer-component', Footer);