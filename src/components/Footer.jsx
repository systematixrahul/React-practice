import React from 'react';

class MyFooter extends React.Component{
    render() {
        return (
            <footer>
                <b>copyright systematix 2018. All Right Resevred</b>
                <p>{this.props.footerinfo}</p>
            </footer>
            );

    }
}

export default MyFooter;