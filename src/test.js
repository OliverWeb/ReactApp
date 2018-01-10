ReactDom.render(
	(<Provider store={store}>
			<BrowserRouter>
				<ul>
					<li>
						<Link to='/' >跳转</Link>
					</li>
				</ul>
			</BrowserRouter>
		</Provider>
	)
)