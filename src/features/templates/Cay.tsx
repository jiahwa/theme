import React from "react";
import "@/assets/css/style.css";
import "@/assets/css/theme1.css";
import "@/assets/css/theme1.dialog.css";
function Cay() {
  const Sure = () => {
    const Theme_dialog = document.getElementsByClassName(
      "Theme_dialog"
    ) as HTMLCollectionOf<HTMLElement>;
    var Theme_shadowcloth = document.getElementsByClassName(
      "Theme_shadowcloth"
    ) as HTMLCollectionOf<HTMLElement>;

    Theme_dialog[0].style.display = "none";
    Theme_shadowcloth[0].style.display = "none";
  };
  return (
    <div>
      <header>
        <h1>Cay主页</h1>
        <h4>Cay is a clean, responsive theme for your website.</h4>
        <a className="box" href="#">
          <span>查看源码</span>
        </a>
        <a className="box" href="#">
          <span>源码下载1（.zip）</span>
        </a>
        <a className="box" href="#">
          <span>源码下载2（tar.gz）</span>
        </a>
      </header>
      <div className="main">
        <p>There should be whitespace between paragraphs.</p>
        <p>
          There should be whitespace between paragraphs. We recommend including
          a README, or a file with information about your project.
        </p>
        <p>
          <a href="#">Link to another page</a>
        </p>

        <h2>Header2</h2>
        <blockquote>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p>
            Praesent eget risus vitae massa semper aliquam quis mattis quam.
          </p>
        </blockquote>
        <h3>Header3</h3>
        <div className="javascript">
          <pre className="lightstyle">
            <code>
              <span className="c1">
                // Javascript code with syntax highlighting.
              </span>
              <span className="kd">var</span> <span className="nx">fun</span>{" "}
              <span className="o">=</span> <span className="kd">function</span>{" "}
              <span className="nx">lang</span>
              <span className="p">(</span>
              <span className="nx">l</span>
              <span className="p">)</span> <span className="p">&#123;</span>
              <span className="nx">dateformat</span>
              <span className="p">.</span>
              <span className="nx">i18n</span> <span className="o">=</span>{" "}
              <span className="nx">require</span>
              <span className="p">(</span>
              <span className="s1">'./lang/'</span> <span className="o">+</span>{" "}
              <span className="nx">l</span>
              <span className="p">)</span>
              <span className="k">return</span> <span className="kc">true</span>
              <span className="p">;</span>
              <span className="p">&rbrace;</span>
            </code>
          </pre>
        </div>
        <h4>Header4</h4>
        <ul>
          <li>This is an unordered list following a header.</li>
          <li>This is an unordered list following a header.</li>
          <li>This is an unordered list following a header.</li>
        </ul>
        <h5>Header5</h5>
        <ol>
          <li>This is an ordered list following a header.</li>
          <li>This is an ordered list following a header.</li>
          <li>This is an ordered list following a header.</li>
        </ol>
        <h6>Header6</h6>
        <table>
          <thead>
            <tr>
              <th>Class Name</th>
              <th>On duty student</th>
              <th>Is Done (Yes/No)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Class1</td>
              <td>Lily</td>
              <td>No</td>
            </tr>
            <tr>
              <td>Class1</td>
              <td>Lodash</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td>Class1</td>
              <td>Jone</td>
              <td>Yes</td>
            </tr>
          </tbody>
        </table>
        <p>There’s a horizontal rule below this.</p>
        <hr />
      </div>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-sm-3 col-lg-3">
              <div className="widget">
                <h5 className="widgetheading">Our Contact</h5>
                <address>
                  <strong>Bootstrap company Inc</strong>
                  <br />
                  JC Main Road, Near Silnile tower
                  <br />
                  Pin-21542 NewYork US.
                </address>
                <p>
                  <i className="icon-phone"></i> (123) 456-789 - 1255-12584{" "}
                  <br />
                  <i className="icon-envelope-alt"></i> email@domainname.com
                </p>
              </div>
            </div>
            <div className="col-sm-3 col-lg-3">
              <div className="widget">
                <h5 className="widgetheading">Quick Links</h5>
                <ul className="link-list">
                  <li>
                    <a className="waves-effect waves-dark" href="#">
                      Latest Events
                    </a>
                  </li>
                  <li>
                    <a className="waves-effect waves-dark" href="#">
                      Terms and conditions
                    </a>
                  </li>
                  <li>
                    <a className="waves-effect waves-dark" href="#">
                      Privacy policy
                    </a>
                  </li>
                  <li>
                    <a className="waves-effect waves-dark" href="#">
                      Career
                    </a>
                  </li>
                  <li>
                    <a className="waves-effect waves-dark" href="#">
                      Contact us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-3 col-lg-3">
              <div className="widget">
                <h5 className="widgetheading">Latest posts</h5>
                <ul className="link-list">
                  <li>
                    <a className="waves-effect waves-dark" href="#">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </a>
                  </li>
                  <li>
                    <a className="waves-effect waves-dark" href="#">
                      Pellentesque et pulvinar enim. Quisque at tempor ligula
                    </a>
                  </li>
                  <li>
                    <a className="waves-effect waves-dark" href="#">
                      Natus error sit voluptatem accusantium doloremque
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-3 col-lg-3">
              <div className="widget">
                <h5 className="widgetheading">Recent News</h5>
                <ul className="link-list">
                  <li>
                    <a className="waves-effect waves-dark" href="#">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </a>
                  </li>
                  <li>
                    <a className="waves-effect waves-dark" href="#">
                      Pellentesque et pulvinar enim. Quisque at tempor ligula
                    </a>
                  </li>
                  <li>
                    <a className="waves-effect waves-dark" href="#">
                      Natus error sit voluptatem accusantium doloremque
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-justify-between overflow-auto">
          <ul className="flex">
            <li>© 2020 Theme, Inc.</li>
            <li>
              <a href="#">Github</a>
            </li>
            <li>
              <a href="#">Other link</a>
            </li>
          </ul>
          <a className="homepage" href="#">
            <img
              src="../assets/img/theme_short_cay.png"
              width="40em"
              height="40em"
            />
          </a>
          <ul className="flex">
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">QQ</a>
            </li>
            <li>
              <a href="#">WeChat</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
          </ul>
        </div>
      </footer>
      {/* 弹窗效果 提示框 */}
      <div className="Theme_shadowcloth Theme_fade in"></div>
      <div className="Theme_dialog Theme_fade in">
        <div className="Theme_dialog-bg">
          <div className="Theme_dialog-content Theme_dialog-shadow">
            <div className="Theme_dialog-header">Error</div>
            <div className="Theme_dialog-body">
              <div className="warning orange Theme_vertical-align-middle"></div>
              <span className="Theme_break-all Theme_vertical-align-middle">
                Request invalid, please asked again later.
              </span>
            </div>
            <div className="Theme_dialog-footer">
              <button className="Theme_btn Theme_btn-primary" onClick={Sure}>
                Sure
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Cay;
