export default {
	addLeave: async () => {
		await add_my_vacation.run().then(() => {
			resetWidget('Container5', true); 
			fetch_my_vacations.run().then(showAlert('Leave added successfully.', 'success'));
		});
	},
	
	getWeekDays:(from, to) => {
		var numWorkDays = 0;
    var currentDate = moment(from, 'YYYY-MM-DD');
    while (currentDate.isSameOrBefore( moment(to, 'YYYY-MM-DD'))) {
				let weekDay = currentDate.isoWeekday();
				if ( weekDay != 6 && weekDay !=7){
					numWorkDays ++
				}
        currentDate = currentDate.add(1, 'day');
    }
    return numWorkDays;
	}
}