import React from 'react';

import './Header.less';

var Header = React.createClass({
	render: function() {
        return (
            <header className="site-header">
                <div className="site-header__avatar"><div className="photo"></div></div>
                <div className="site-header__name">Dmitry Klimenko</div>
                <div className="site-header__position">Front-end developer</div>
                <p className="site-header__description">Workring with Smarty PHP Engine and WordPress. Using full-stack BEM
                    metodology and Node on server side.</p>
            </header>
        );
    }
});

export default Header;
