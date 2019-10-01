import React from 'react';
import { Link } from "gatsby"
import "../styles/post-link.css"

export default function PostLink(props){
	return (
		<li className="post-item grid-item">
			<Link className="post-link" to={props.path}>
				<h3 className="post-title">{props.title}</h3>
				<div className="post-meta">
					<time dateTime={props.date}>
						{props.date}
					</time>
				</div>
			</Link>
		</li>
	);
}
