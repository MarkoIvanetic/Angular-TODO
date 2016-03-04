todoApp.factory('dataService', function() {
	return {
		items:{
			pending:[
			{
				name: 'Do the laundry',
				creatorName: 'Marko Ivanetic',
				duration: 1,
				description: 'In this session you will learn the ins and outs of directives!',
				done: false
			},
			{
				name: 'Do the laundry',
				creatorName: 'Marko Ivanetic',
				duration: 1,
				description: 'In this session you will learn the ins and outs of directives!',
				done: false
			},
			{
				name: 'Do the basket',
				creatorName: 'Marko Ivanetic',
				duration: 1,
				description: 'In this session you will learn the ins and outs of directives!',
				done: false
			},
			{
				name: 'Do the laundry',
				creatorName: 'Marko Ivanetic',
				duration: 1,
				description: 'In this session you will learn the ins and outs of directives!',
				done: false
			}
			],
			finished:[
			{
				name: 'Do the laundry',
				creatorName: 'Marko Ivanetic',
				duration: 1,
				description: 'In this session you will learn the ins and outs of directives!',
				done: true
			}
			]
		}
	}
});
