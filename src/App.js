import "./index.css";

const openGithub = () => window.open("https://www.github.com/itaysarfaty");
function App() {
	return (
		
		<div className="window">
			<div className="content center">
				<h1 className="heroText prevent-select">
					<span id="bracket">[</span> EE-tie <span id="bracket">]</span>
				</h1>
				<div className="menu prevent-select">
					<h2 className="menu-button" onClick={()=> console.log('portfolio')}>
						portfolio
					</h2>
					<div className="dot"/>
					<h2 className="menu-button" onClick={openGithub}>
						github
					</h2>
					<div className="dot"/>
					<h2 className="menu-button" onClick={()=> console.log('resume')}>
						resume
					</h2>
				</div>
			</div>
			<div className="bottom-bar">
				<div className="bottom-content center">
					<div className="info-section vertical-center prevent-select">
						<h2 className="info">
							🎢 Product Oriented
						</h2>
						<h2 className="info">
							🤝 Fullstack Developer
						</h2>
						<h2 className="info">
							💻 B.S. in Computer Science
						</h2>	
					</div>
					<h2 id='email'>
						itaysarfaty@gmail.com
					</h2>
				</div>
			</div>
		</div>
		
	);
}


export default App;
