var model = {
	'bio' : {
		'name' : 'Jennie Buechner',
		'role' : 'Web Developer',
		'contacts' : {
			'mobile' : '+34 633 78 37 29',
			'email' : 'janina.buechner@gmail.com',
			'github' : 'jbuechs',
			'twitter' : '@jbuechs',
			'location' : 'Madrid'
		},
		'welcomeMessage' : 'I am an aspiring web developer. For the past 11 years, I have been a teacher,' +
			' which has been extremely rewarding. Although I love teaching students and teachers about' +
			' technology, I have come to the realization that my passion lies in learning to code.',
		'skills' : ['teaching',
					'learning',
					'programming',
					'rugby'],
		'biopic' : 'images/jennie.jpg',
	},
	'jobs' : [
		{
			'employer' : 'The American School of Madrid',
			'title' : 'Teacher and Technology Integration Specialist',
			'location' : 'Madrid, Spain',
			'dates' : '2010-2015',
			'description' : 'Taught IB Standard Level Information Technology in a Global Society (ITGS).' +
			' Taught Middle School Game Design, Digital Storytelling, and Introduction to Programming Android Apps.' +
			' Trained teachers and evaluated technology options including Moodle and Smartboard training. ' +
			'Contributed to increased technology use, including implementation of Google Apps for Education and over 130 Wordpress blogs',
			'url' : 'http://www.asmadrid.org/'
		},
		{
			'employer' : 'The International School of Phnom Penh',
			'title' : 'Technology Coordinator & MYP Teacher',
			'location' : 'Phnom Penh, Cambodia',
			'dates' : '2006-2009',
			'description' : 'Oversaw yearly technology budget and purchases through chairing  the Technology '+
			'Committee and participation in school-wide Leadership Team. Presented workshops on a variety' +
			' of topics to teachers on technology integration. Created and taught MYP units to grades 6-10 ' +
			'students on digital audio, images/photography, publications, movies, websites, animation, and game making',
			'url' : 'http://www.ispp.edu.kh/'
		},
		{
			'employer' : 'Henley Middle School',
			'title' : 'Math Teacher',
			'location' : 'Ablemarle County, VA',
			'dates' : '2004-2006',
			'description' : 'Taught 7th grade math classes - regular and accelerated. Achieved National Board Certification' +
			' in Mathematics, Early Adolescence.',
			'url' : 'http://www2.k12albemarle.org/school/hms/Pages/default.aspx'
		},
		{
			'employer' : 'Agnor-Hurt Elementary School',
			'title' : 'Fifth Grade Teacher',
			'location' : 'Ablemarle County, VA',
			'dates' : '2002-2004',
			'description' : 'Taught grade 5 - language arts, math, and social studies. Wrote grant for school to receive '+
			'30 iBooks and $15,000 in funds for technology, professional development, and support. Led team of teachers '+
			'in planning and implementing an inquiry-based instructional model',
			'url' : 'http://www2.k12albemarle.org/school/ahes/Pages/default.aspx'
		}
	],
	'projects' : [
		{
			'title' : 'Resume Project',
			'dates' : 'May 2015',
			'description' : 'An interactive resume built with javascript',
			'images' : ['images/resume1.png']
		},
		{
			'title' : 'Portfolio Project',
			'dates' : 'May 2015',
			'description' : 'A responsive portfolio built with HTML and CSS',
			'images' : ['images/portfolio1.png', 'images/portfolio2.png']
		}
	],
	'schools' : [
		{
			'name' : 'Drexel University',
			'location' : 'Philadelphia, PA',
			'degree' : 'MS in Learning Technologies',
			'majors' : ['Learning in Game-Based Environments'],
			'dates' : 2013,
			'url' : 'http://www.drexel.com/online-degrees/education-degrees/ms-learningtech/index.aspx'
		},
		{
			'name' : 'University of Virginia',
			'location' : 'Charlottesville, VA',
			'degree' : 'Masters in Teaching',
			'majors' : ['Elementary Education (k-8)'],
			'dates' : 2002,
			'url' : 'http://curry.virginia.edu/academics/degrees/master-of-teaching/master-of-teaching-elementary-education'
		},
		{
			'name' : 'University of Virginia',
			'location' : 'Charlottesville, VA',
			'degree' : 'BA',
			'majors' : ['Psychology'],
			'dates' : 2002,
			'url' : 'http://college.artsandsciences.virginia.edu/degreeprograms'
		}
	],
	'onlineCourses' : [
		{
			'title' : 'Introduction to Java Programming',
			'school' : 'Udacity',
			'dates' : 2015,
			'url' : 'https://www.udacity.com/course/intro-to-java-programming--cs046'
		},
		{
			'title' : 'Introduction to HTML and CSS',
			'school' : 'Udacity',
			'dates' : 2015,
			'url' : 'https://www.udacity.com/course/intro-to-html-and-css--ud304'
		},
				{
			'title' : 'An Introduction to Interactive Programming in Python',
			'school' : 'Coursera',
			'dates' : 2015,
			'url' : 'https://www.coursera.org/course/interactivepython1'
		}
	],
};

var view = {
	displayBio : function(bio) {
		var formattedName = HTMLheaderName.replace('%data%', bio.name);
		var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
		$('#header').prepend(formattedRole);
		$('#header').prepend(formattedName);
		var formattedPicture = HTMLbioPic.replace('%data%', bio.biopic);
		var formattedWelcome = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);
		$('#header').append(formattedPicture);
		$('#header').append(formattedWelcome);
		//Skills
		if (bio.skills.length > 0) {
			$('#header').append(HTMLskillsStart);
			var formattedSkill = '';
			for (var i = 0; i < bio.skills.length; i++) {
				formattedSkill = HTMLskills.replace('%data%', bio.skills[i]);
				$('#skills').append(formattedSkill);
			}
		}
	},
	displayContacts : function(contact, bio) {
		var formattedMobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
		$(contact).append(formattedMobile);
		var formattedEmail = HTMLemail.replace('%data%', bio.contacts.email);
		$(contact).append(formattedEmail);
		var formattedTwitter = HTMLtwitter.replace('%data%', bio.contacts.twitter);
		$(contact).append(formattedTwitter);
		var formattedGithub = HTMLgithub.replace('%data%', bio.contacts.github);
		$(contact).append(formattedGithub);
		var formattedLocation = HTMLlocation.replace('%data%', bio.contacts.location);
		$(contact).append(formattedLocation);
	},
	displayJobs : function(jobs) {
		for (var i = 0; i < jobs.length; i++) {
			$('#workExperience').append(HTMLworkStart);
			var formattedEmployer = HTMLworkEmployer.replace('%data%', jobs[i].employer);
			formattedEmployer = formattedEmployer.replace('#', jobs[i].url);
			var formattedTitle = HTMLworkTitle.replace('%data%', jobs[i].title);
			var fullJob = formattedEmployer + formattedTitle;
			var formattedDates = HTMLworkDates.replace('%data%', jobs[i].dates);
			var formattedLocation = HTMLworkLocation.replace('%data%', jobs[i].location);
			var formattedDescription = HTMLworkDescription.replace('%data%', jobs[i].description);
			$('.work-entry:last').append(fullJob);
			$('.work-entry:last').append(formattedDates);
			$('.work-entry:last').append(formattedLocation);
			$('.work-entry:last').append(formattedDescription);
		}
	},
	displayProjects : function(projects) {
		for (var i = 0; i < projects.length; i++) {
			$('#projects').append(HTMLprojectStart);
			var formattedProjTitle = HTMLprojectTitle.replace('%data%', projects[i].title);
			var formattedProjDates = HTMLprojectDates.replace('%data%', projects[i].dates);
			var formattedProjDescription = HTMLprojectDescription.replace('%data%', projects[i].description);
			$('.project-entry:last').append(formattedProjTitle);
			$('.project-entry:last').append(formattedProjDates);
			$('.project-entry:last').append(formattedProjDescription);
			if (projects[i].images.length > 0) {
				for (var j = 0; j < projects[i].images.length; j++)
				{
					var formattedProjImage = HTMLprojectImage.replace('%data%', projects[i].images[j]);
					$('.project-entry:last').append(formattedProjImage);
				}
			}
		}
	},
	displayEducation : function(schools, onlineCourses) {
		var i, formattedDate;
		if (schools.length > 0) {
			for (i = 0; i < schools.length; i++) {
				$('#education').append(HTMLschoolStart);
				var formattedName = HTMLschoolName.replace('%data%', schools[i].name);
				formattedName = formattedName.replace('#', schools[i].url);
				var formattedDegree = HTMLschoolDegree.replace('%data%', schools[i].degree);
				formattedDate = HTMLschoolDates.replace('%data%', schools[i].dates);
				var formattedLocation = HTMLschoolLocation.replace('%data%', schools[i].location);
				$('.education-entry:last').append(formattedName);
				$('.education-entry:last').append(formattedDegree);
				$('.education-entry:last').append(formattedDate);
				$('.education-entry:last').append(formattedLocation);
				if (schools[i].majors.length > 0) {
					for (var j = 0; j < schools[i].majors.length; j++) {
						var formattedMajor = HTMLschoolMajor.replace('%data%', schools[i].majors[j]);
						$('.education-entry:last').append(formattedMajor);
					}
				}
			}
		}
		$('#education').append(HTMLonlineClasses);
		if (onlineCourses.length > 0) {
			for (i = 0; i < onlineCourses.length; i++) {
				$('#education').append(HTMLschoolStart);
				var formattedTitle = HTMLonlineTitle.replace('%data%', onlineCourses[i].title);
				formattedTitle = formattedTitle.replace('#', onlineCourses[i].url);
				var formattedSchool = HTMLonlineSchool.replace('%data%', onlineCourses[i].school);
				formattedDate = HTMLonlineDates.replace('%data%', onlineCourses[i].dates);
				$('.education-entry:last').append(formattedTitle);
				$('.education-entry:last').append(formattedSchool);
				$('.education-entry:last').append(formattedDate);
			}
		}
	},
	displayMap : function() {
		$('#mapDiv').append(googleMap);
	}
};

var octopus = {
	init : function() {
		// Header
		view.displayBio(model.bio);
		// Contacts
		view.displayContacts('#topContacts', model.bio);
		view.displayContacts('#footerContacts', model.bio);
		// Employment
		view.displayJobs(model.jobs);
		// Projects
		view.displayProjects(model.projects);
		// Education
		view.displayEducation(model.schools, model.onlineCourses);
		// Map
		view.displayMap();
	},
};

octopus.init();