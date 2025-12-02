export default {
	teamLeads: [
		'yatin@appsmith.com',
		'aishwarya@appsmith.com',
		'aparna@appsmith.com',
		'kamakshi@appsmith.com',
		'saptami@appsmith.com',
		'saroj@appsmith.com'
	],
	
	getPeopleOnLeaveToday: () => {
		let text =  _.uniq(_.map(_.filter(fetch_all_vacations.data, v => {
			return v.active && (moment().isBetween(v.from_date, v.to_date) 
													|| moment(moment().format("YYYY-MM-DD")).isSame(v.from_date) 
													|| moment(moment().format("YYYY-MM-DD")).isSame(v.to_date) 
												 )}), d =>_.capitalize(d.employee_ref.split('@')[0])))
		let returnText = text.length == 0 ? "All team members are available today 🎉" : "On leave today: "+ text.toString().replaceAll(',', ', ')
		return returnText;
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