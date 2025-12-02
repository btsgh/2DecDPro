export default {
	addLeave: async () => {
		await add_vacation.run().then(() => {
			resetWidget('Modal1', true);
			closeModal('Modal1');
			fetch_all_vacations.run().then(showAlert('Leave added successfully.', 'success'));
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
	},

	getFilteredData:() => {
		let data = fetch_all_vacations.data;
		if (qa.selectedOptionLabel.length > 0) {
			data = _.filter(data, d => d.employee_ref == qa.selectedOptionValue)
		}

		if (from.selectedDate.length > 0) {
			data = _.filter(data, d => moment(d.from_date, "YYYY-MM-DD").isAfter(moment(from.selectedDate, "YYYY-MM-DD")))
		}

		if (to.selectedDate.length > 0) {
			data = _.filter(data, d => moment(d.from_date, "YYYY-MM-DD").isBefore(moment(to.selectedDate, "YYYY-MM-DD")))
		}
		return data;
	}
}