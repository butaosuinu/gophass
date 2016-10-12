<result-list-item>
	<div class="uk-margin-large-top">
		<div each={ lists } class="list-item">
			<div class="uk-grid uk-grid-divider">
				<div class="uk-width-1-6">
					<div>{ startDate.year }</div>
					<div>
						{ startDate.month }/{ startDate.day }
					</div>
				</div>
				<div class="uk-width-5-6">
					<div class="uk-grid">
						<div class="uk-width-medium-4-5">
							<h3 class="event-title">{ title }</h3>
							<p>{ location }</p>
						</div>
						<div class="uk-width-medium-1-5 uk-text-right">
							参加 <span class="{ accepted >= limit ? 'full' : '' }">{ accepted }</span> / 定員 { limit }人
						</div>
					</div>
				</div>
			</div>
			<hr class="uk-grid-divider">
		</div>
	</div>

	<style type="text/scss">
		result-list-item {
			font-size: 18px;
			@media (max-width: 768px) {
				font-size: 14px;
			}
			.event-title {
				font-size: 24px;
				font-weight: bold;
				@media (max-width: 768px) {
					font-size: 16px;
				}
			}
			.full{
				color: red;
			}
		}
	</style>

	<script type="babel">
		const seachSurvice = require('../../../js/service/searchService.js');
		this.lists = seachSurvice.getEventSearchResult();
	</script>
</result-list-item>