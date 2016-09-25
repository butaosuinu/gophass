require('./parts/common/header.tag');
require('./parts/common/homeMainTabMenu.tag');

<home>
	<main-header/>
	<div class="uk-container uk-container-center uk-margin-top">
		<home-tab-menu tabval="home"></home-tab-menu>
		<h2>{ title }</h2>
		<p>{ name }</p>
	</div>

	<script type="babel">
		document.title = 'Gophass';
		this.name = 'IT系イベント検索・管理サービス';
		this.title = 'Gophass メインページ';
	</script>
</home>