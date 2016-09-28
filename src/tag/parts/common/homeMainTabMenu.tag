<home-tab-menu>
	<ul class="uk-tab uk-tab-grid home-tab-menu" data-uk-tab>
		<li class="uk-width-1-3 { opts.tabval === 'home' ? 'uk-active' : '' }"><a href="">カレンダー</a></li>
		<li class="uk-width-1-3 { opts.tabval === 'list' ? 'uk-active' : '' }"><a href="">一覧</a></li>
		<li class="uk-width-1-3 { opts.tabval === 'manage' ? 'uk-active' : '' }"><a href="">参加イベント</a></li>
	</ul>

	<style type="text/scss">
		$aa: #222222;
		home-tab-menu{
			font-size: 18px;
			.uk-tab li a{
				color: $aa;
			}
			@media (max-width: 880px){
				font-size: 12px;
				.uk-tab li a{
					color: red;
				}
			}
		}
	</style>

	<script type="babel">
	</script>
</home-tab-menu>