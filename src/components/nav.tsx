import * as React from 'react';

class Nav extends React.Component {
  public render() {
    return (
        <nav>
            <ul>
                <li><a href="#">Item 1</a></li>
                <li><a href="#">Item 2</a></li>
                <li><a href="#">Item 3</a></li>
                <li><a href="#">Item 4</a></li>
                <li><a href="#">Item 5</a></li>
            </ul>
        </nav>
    );
  }
}

export default Nav;
