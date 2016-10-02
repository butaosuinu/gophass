require('./parts/common/header.tag');
require('./parts/common/homeMainTabMenu.tag');
require('./parts/common/mainFooter.tag');
require('./parts/home/resultListItem.tag');

<result-list>
	<main-header/>
	<div class="uk-container uk-container-center uk-margin-top">
		<home-tab-menu tabval="list"></home-tab-menu>
		<result-list-item/>
	</div>
	<main-footer/>
	<style type="text/scss">
		result-list {
			
		}
	</style>

	<script type="babel">
		
	</script>
</result-list>