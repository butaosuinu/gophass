const axios = require('axios')
const $     = require('jquery')

const getEventSearchResult = () => {

	const data = [
		{
			title: 'テストイベントタイトル',
			location: '北海道 札幌',
			startDate: {
				year: '2016',
				month: '10',
				day: '01'
			},
			url: 'http://sample.com',
			limit: '30',
			accepted: '18'
		},
		{
			title: 'テストイベントタイトルベリーロングタイトル＠ああああああああああああああああああああああああああああああああああ',
			location: '北海道 札幌',
			startDate: {
				year: '2016',
				month: '10',
				day: '01'
			},
			url: 'http://sample.com',
			limit: '30',
			accepted: '18'
		},
		{
			title: '満員テストイベントタイトル',
			location: '北海道 札幌',
			startDate: {
				year: '2016',
				month: '10',
				day: '01'
			},
			url: 'http://sample.com',
			limit: '30',
			accepted: '31'
		},
		{
			title: 'テストイベントタイトル',
			location: '北海道 札幌',
			startDate: {
				year: '2016',
				month: '10',
				day: '01'
			},
			url: 'http://sample.com',
			limit: '30',
			accepted: '18'
		},
		{
			title: 'テストイベントタイトル',
			location: '北海道 札幌',
			startDate: {
				year: '2016',
				month: '10',
				day: '01'
			},
			url: 'http://sample.com',
			limit: '30',
			accepted: '18'
		},
		{
			title: 'テストイベントタイトル',
			location: '北海道 札幌',
			startDate: {
				year: '2016',
				month: '10',
				day: '01'
			},
			url: 'http://sample.com',
			limit: '30',
			accepted: '18'
		},
		{
			title: 'テストイベントタイトル',
			location: '北海道 札幌',
			startDate: {
				year: '2016',
				month: '10',
				day: '01'
			},
			url: 'http://sample.com',
			limit: '30',
			accepted: '18'
		},
		{
			title: 'テストイベントタイトル',
			location: '北海道 札幌',
			startDate: {
				year: '2016',
				month: '10',
				day: '01'
			},
			url: 'http://sample.com',
			limit: '30',
			accepted: '18'
		}
	]
	return data

	// axios.get('/api/v1/event/?keyword=札幌',{
	// 			headers: {'X-Requested-With': 'XMLHttpRequest'},
	// 			responseType: 'json'
	// 	})
	// 	.then((response) => {
	// 		return response
	// 	})
	// 	.catch((error) => {
	// 		console.log(error);
	// 	})
	// $.ajax({
	// 	url: 'http://connpass.com/api/v1/event/?keyword=札幌',
	// 	dataType: 'jsonp',
	// 	type: "GET",
	// 	success: function(res) {
	// 		console.log(res);
	// 		return res;
	// 	}
	// });
}

module.exports = {
	getEventSearchResult: getEventSearchResult
}
