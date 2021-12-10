import styled from 'styled-components'
import logopic from '../../statics/logo.png'


export const HeaderWrapper = styled.div`
z-index: 1;
position:relative;
height: 56px;
border-bottom: 1px solid #f0f0f0;
`;

export const Logo = styled.div`
position:abosolute;
top:0px;
left:0px;
display:block;
height: 56px;
width:100px;
float:left;
background:url(${logopic});
background-size:contain;
`;

export const Nav = styled.div`
width: 560px;
height: 100%;
padding: 0 70px 0 0;
box-sizing: border-box;
margin: 0 auto;
`;

export const NavItem = styled.div`
line-height: 56px;
padding: 0 15px;
font-size: 17px;
color: #333;
&.left {
    float: left;
}
&.right {
    float: left;
    color: #969696;
}
&.active {
    color: #ea6f5a;
}
&.login{
	cursor:pointer;
}
`;

export const SearchWrapper = styled.div`
	position: relative;
	float: left;
	
	.zoom {
		position: absolute;
		right: 5px;
		bottom: 5px;
		width: 30px;
		line-height: 30px;
		border-radius: 15px;
		text-align: center;
		&.focused {
			background: #777;
			color: #fff;
		}
	}
`;

export const NavSearch = styled.input.attrs({
	placeholder: 'Search'
})`
	width: 160px;
	height: 38px;
	padding: 0 0 0 20px;
	margin-top: 9px;
	margin-left: 20px;
	box-sizing: border-box;
	border: none;
	outline: none;
	border-radius: 19px;
	background: #eee;
	font-size: 14px;
	color: #666;
	&::placeholder {
		color: #999;
	}
	&.focused {
		width: 240px;
	}
	&.slide-enter {
		transition: all .2s ease-out;
	}
	&.slide-enter-active {
		width: 240px;
	}
	&.slide-exit {
		transition: all .2s ease-out;
	}
	&.slide-exit-active {
		width: 160px;
	}
`;

export const SearchInfo = styled.div`
position: absolute;
left: 0;
top: 56px;
width: 240px;
padding: 0 20px;
box-shadow: 0 0 8px rgba(0,0,0,.2);
background: #fff;
`;

export const SearchInfoTitle = styled.div`
margin-top:20px;
margin-bottom:15px;
line-height:20px;
font-size:14px;
color:#969696;
`;

export const SearchInfoSwitch = styled.span`
float:right;
font-size:13px
cursor: pointer;
.spin {
	display: block;
	float: left;
	font-size: 12px;
	margin-right: 2px;
	transition: all .2s ease-in;
	transform-origin: center center;
	cursor: pointer;
}
`;

export const SearchInfoItem = styled.a`
display:block;
float:left;
line-height:20px;
padding:0 5px;
font-size:12px;
border: 1px solid #ddd;
color: #787878;
border-radius:3px;
margin-right:10px;
margin-bottom:15px;
`;

export const SearchInfoList = styled.div`
overflow:hidden;
`;

// export const Addition = styled.div`
// 	position: absolute;
// 	right: 0;
// 	top: 0;
// 	height: 56px;
// `;
export const Addition = styled.div`
	width: 400px;
	height: 100%;
`;

export const Button = styled.div`
	float: right;
	margin-top: 9px;
	margin-right: 20px;
	padding: 0 20px;
	line-height: 38px;
	border-radius: 19px;
	border: 1px solid #ec6149;
	font-siz: 14px;
	&.reg {
		color: #ec6149;
		float: left;
	}
	&.writting {
		float: left;
		color: #fff;
		background: #ec6149;
	}
`;

///////////////////////////////////////mobile style
export const MobileComponent = styled.div`
position:relative;
border-bottom: 1px solid #f0f0f0;
line-height: 56px;
.card{
	border:none
}
.cardHeader{
	background-color:#fff;
	border:null;
	padding:0;
	height:56;
	border-bottom: 1px solid #f0f0f0;
}
.cardBody{
	padding:0
}
`;

export const CardBodyItem = styled.div`
border-bottom: 1px solid #f0f0f0;
padding-left: 100px;
font-size: 0.3em;
height: 8em;
line-height: 8em;
`;

export const MobileSearch = styled.input.attrs({
	placeholder: '搜索'
})`
	width: 10em;
	height: 2em;
	padding: 0 0 0 20px;
	box-sizing: border-box;
	border: none;
	outline: none;
	border-radius: 19px;
	background: #eee;
	font-size: 14px;
	color: #666;
	&::placeholder {
		color: #999;
	}
	&.focused {
		width: 240px;
	}
`;