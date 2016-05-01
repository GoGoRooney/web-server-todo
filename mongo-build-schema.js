var mongoose = require('mongoose');


var urlStr = 'mongodb://localhost/test';

var db = mongoose.connect(urlStr);
db.connect(urlStr, function(err, res) {
	if (err) {
		console.log(err);
	} else {
		console.log('connected');
	}
}

);

mongoose.set('debug', true);

console.log(db);

var Schema = mongoose.Schema;

var holidaySchema = new Schema(
		{name: String,
		durationInHours: String,
		holidayDate: Date}
	);
var reviewsSchema = new Schema(
	{ body: String,
		date: Date }
	);

var businessHours = new Schema(
	{dayName: String,
	whenOpen:  Date,
	whenEndMorning: Date,
	whenStartAfternoon: Date,
	whenClose: Date	}
	);


var businessSchema = new Schema(
	{businessId : Schema.Types.ObjectId,
	long: Number,
	lat: Number,
	name: String,
	street: String,
	houseNr: String,
	placeName: String,
	postCode: String,
	emailAddress: String,
	telephoneNr: String,
	alternativeTelephoneNr: String,
	openingTimes: [businessHours],
	holidays: [holidaySchema],
	bookingUnits: String,
	bookingsTakenInAdvanceDays: Number,
	price: String,
	reviews: [reviewsSchema],
	workers: [{type: Schema.Types.ObjectId, ref: 'worker'}]
	}
);

var hoursWorkedSchema = new Schema(
	{dayName: String,
	whenStartMoring:  Date,
	whenEndMorning: Date,
	whenStartAfternoon: Date,
	whenEnd: Date });

var workerSchema = new Schema(
	{workerId: Schema.Types.ObjectId,
	workerName: String,
	priceLevel: String,
	pictureUrl: String,
	workHours: [{type: Schema.Types.ObjectId, ref: 'HoursWorked'}],
	holidays: [{type: Schema.Types.ObjectId, ref: 'Holiday'}],
	calendar: [{type: Schema.Types.ObjectId, ref: 'CalendarYear'}]
	});

var calendaYearSchema = new Schema({
	calendarId: Schema.Types.ObjectId,
	year: String,
	calendarDays: [{type: Schema.Types.ObjectId, ref: 'CalendarDays'}]
});

var timeSlotsSchema = new Schema({
	startAt: Date, 
	length: Number, 
	bookingStatus: String});

var calendarDaysSchema = new Schema({
	calendarDayId: Schema.Types.ObjectId,
	dayName: String,
	timeUnitsSize: String,
	timeSlots: [{type: Schema.Types.ObjectId, ref: 'TimeSlots'}]
});
 
var customerSchema = new Schema({
	customerId: Schema.Types.ObjectId,
	loginName: String,
	password: String,
	name: String,
	telephoneNr: String,
	emailAddress: String
});

var materialisedSearchListSchema = new Schema({
	availableDate: Date,
	lengthTime: Date,
	latitude: Number,
	longitude: Number,
	priceLevel: String,
	businessType: String,
	businessId: [{type: Schema.Types.ObjectId, ref: 'business'}],
	workerId: [{type: Schema.Types.ObjectId, ref: 'worker'}],
	bookedByUser: [{type: Schema.Types.ObjectId, ref: 'worker'}]
});

var Business = mongoose.model('Business', businessSchema);
var mustCreate = true;
var query = Business.find({ name: 'business' });
var queryPromise = query.exec();
queryPromise.addBack(function (err, docs) {
	if (err) return console.log(err);
	
	console.log('..'+docs);
	mustCreate = false;
	}
);

if (mustCreate) {

	console.log('Creating model');

	var business = new Business({name: 'Moore or Less Hairstyle'});

	business.street= 'Mettmenriedtweg';
	business.houseNr = '3';
	business.placeName = 'Greifensee';
	business.postCode = '8606';
	business.emailAddress =  'richmoore@bluewin.ch',
	business.telephoneNr = '044 310 33 49';
	business.alternativeTelephoneNr = '079 202 643';

	business.openingTimes.push(
	{dayName: 'Monday',	
			whenOpen:  new Date,
			whenEndMorning: new Date,
			whenStartAfternoon: new Date,
			whenClose: new Date}
		);

	business.holidays.push({ name:'May Day',durationInHours: '24',
							holidayDate: new Date });


	business.bookingUnits= '0.5';
	business.bookingsTakenInAdvanceDays= 21;
	business.price= "Very Expensive";
	business.reviews.push({ body: 'Absolute the cut.',
		date: new Date });


	console.log('after Creating business model');

	
	var Worker = mongoose.model('Worker', workerSchema);	
	var worker = new Worker();
	worker.name = "richard moore";
	worker.priceLevel = "medium";

	var Holiday = mongoose.model('Holiday', holidaySchema);
	var mayDayHoliday = new Holiday();
	mayDayHoliday.name =' May Day';
	mayDayHoliday.durationInHours = '24',
	mayDayHoliday.holidayDate = new Date ;

	mayDayHoliday.save(function(err) {
		if (err) return console.error(err);
		console.log(mayDayHoliday);
		console.log('holiday saved');
	});

	worker.holidays = [];
	worker.holidays.push(mayDayHoliday);

	worker.workHours = [];

	var HoursWorked = mongoose.model('HoursWorked',hoursWorkedSchema);
	var hoursWorked = new HoursWorked();
	hoursWorked.dayName = 'Monday'; 
	hoursWorked.whenStartMoring = new Date;
	hoursWorked.whenEndMorning  = new Date;
	hoursWorked.whenStartAfternoon  = new Date;
	hoursWorked.whenEnd  = new Date;
	hoursWorked.save(function(err) {
		if (err) return console.error(err);
		console.log(hoursWorked);
		console.log('Hours saved');
	});

	worker.workHours.push(hoursWorked);


	var Timeslot = mongoose.model('Timeslots',timeSlotsSchema);
	var first = new Timeslots();
	first.startAt = new Date; 
	first.length: 30; 
	first.bookingStatus: 'free';

	var second = new Timeslots();
	second.startAt = new Date; 
	second.length: 30; 
	second.bookingStatus: 'free';
	
	var third  = new Timeslots();
	third.startAt = new Date; 
	third.length: 30; 
	third.bookingStatus: 'free';

	var fourth = new Timeslots();
	fourth.startAt = new Date; 
	fourth.length: 30; 
	fourth.bookingStatus: 'free';

	var fifth = new Timeslots();
	fifth.startAt = new Date; 
	fifth.length: 30; 
	fifth.bookingStatus: 'free';
	
	var CalendarDays = mongoose.model('CalendarDays', CalendarDaysSchema);
	var monday = new CalendarDays();
	monday.dayName = 'Monday';
	monday.timeUnitsSize='0.5';
	monday.timeSlots = [];
	monday.timeSlots.push(first);
	monday.timeSlots.push(second);
	monday.timeSlots.push(third);
	monday.timeSlots.push(fourth);
	monday.timeSlots.push(fifth);

	var tuesday = new CalendarDays();
	tuesday.dayName = 'Tuesday';
	tuesday.timeUnitsSize='0.5';
	tuesday.timeSlots = [];
	tuesday.timeSlots.push(first);
	tuesday.timeSlots.push(second);
	tuesday.timeSlots.push(third);
	tuesday.timeSlots.push(fourth);
	tuesday.timeSlots.push(fifth);

	var WorksCalendar = mongoose.model('Calendar', calendarYearSchema);
	var worksCal = new WorksCalendar();
	worksCal.year = '2016';
	worksCal.calendarDays = [];
	worksCal.push(monday);
	worksCal.push(tueday);
	worker.calendar = [];
	worker.calendar.push(worksCal);

	worker.save(function(err) {
		if (err) return console.error(err);
		console.dir(worker);
	});

	business.workers = [];
	business.workers.push(worker);
	business.save(function(err) {
		if (err) return console.error(err);
		console.dir(business);
	});


}



console.log('finished');
