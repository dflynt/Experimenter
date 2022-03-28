use experimenterdb;

CREATE TABLE Institutions (
	id char(36) NOT NULL,
    name char(255) NOT NULL,
    address char(255) NOT NULL,
    state char(2) NOT NULL,
    zip int NOT NULL,
    logo char(255) NULL,
    created DATETIME NOT NULL,
    lastChanged DATETIME NOT NULL,
    CONSTRAINT PK_Institution PRIMARY KEY (id)
)

insert into Institutions 
values (UUID(), "University of North Carolina and Chapel Hill", "Chapel Hill St", "NC", 27614, "www.bread.com", 
				SYSDATE(), SYSDATE())
 
CREATE TABLE Users (
	id char(36) NOT NULL,
    firstName char(255) NOT NULL,
    lastName char(255) NOT NULL,
    midName char(255) NULL,
    password char(255) NOT NULL,
    email char(255) NOT NULL,
    institution char(36) NULL,
    instructor char(36) NULL,
    field char(255) NULL,
    focus char(255) NULL,
    loggedIn bit(1) NOT NULL,
    avatar char(255) NULL,
    dateJoined DATETIME NOT NULL,
    CONSTRAINT PK_User PRIMARY KEY (id)
)

CREATE INDEX index_user
ON Users (institution, id)

INSERT INTO Users
VALUES (UUID(), "Danny", "Flynt", "Wayne", "turtles", "danielflynt1@gmail.com", 'aa647c1b-ad77-11ec-8ea5-00ff07d630e4',
			null, "Engineering", "Computer Science", 1, "imgr.com/adsfnsadf", SYSDATE())
            
CREATE TABLE Instructors (
	id char(36) NOT NULL,
    firstName char(255) NOT NULL,
    lastName char(255) NOT NULL,
    midName char(255) NULL,
	email char(255) NOT NULL,
    password char(255) NOT NULL,
    institution char(36) NOT NULL,
    field char(255) NULL,
    focus char(255) NULL,
    loggedIn bit(1) NOT NULL,
    avatar char(255) NULL,
    dateJoined DATETIME NULL,
    CONSTRAINT PK_Instructor PRIMARY KEY (id)
)

CREATE INDEX index_instructor
ON Instructors (institution, id)

INSERT INTO Instructors
VALUES (UUID(), "Gary", "Bishop", "Wayne", "turtles", "gb@gmail.com", 'aa647c1b-ad77-11ec-8ea5-00ff07d630e4',
			"Engineering", "Computer Science", 1, "imgur.com/?12341#5", SYSDATE())
	
select * from instructors

CREATE TABLE Experiments (
	id char(36) NOT NULL,
    author char(36) NOT NULL,
    dateCreated DATETIME NOT NULL,
    lastModified DATETIME NOT NULL,
    content MEDIUMTEXT NULL,
    figures TEXT NULL,
    seenByInstructor BIT(1) NULL,
    needsWorkByInstructor BIT(1) NULL,
    instructorComments char(255) NULL,
    approvedByInstructor BIT(1) NULL,
    timeSeenByInstructor DATETIME NULL,
    CONSTRAINT PK_Experiment PRIMARY KEY (id)
)

CREATE INDEX index_experiment
ON Experiments (author, dateCreated)

INSERT INTO Experiments
VALUES (UUID(), 'a69d829f-ad7b-11ec-8ea5-00ff07d630e4', SYSDATE(), SYSDATE(), "test content", "test figures", 1, 1, "test comments", 1, SYSDATE())

select * from Experiments

CREATE TABLE Licenses (
	id char(36) NOT NULL,
    instructor char(36) NOT NULL,
    dateClaimed DATETIME NOT NULL,
    dateTerminated DATETIME NULL,
    CONSTRAINT PK_License PRIMARY KEY (id)
)

CREATE INDEX index_license
ON Licenses (id)

INSERT INTO Licenses
VALUES (UUID(), '21973d13-ad7a-11ec-8ea5-00ff07d630e4', SYSDATE(), SYSDATE())

SELECT * from Licenses

CREATE TABLE InstructorConfigs (
    instructor char(36) NOT NULL,
	showSeenByInstructor BIT(1) NOT NULL,
    showNeedsWorkByInstructor BIT(1) NOT NULL,
    showApprovedByInstructor BIT(1) NOT NULL,
    showCommentsByInstructor BIT(1) NOT NULL,
    CONSTRAINT PK_InstructorConfig PRIMARY KEY (instructor)
    
)
CREATE INDEX index_config
ON InstructorConfigs (instructor)

INSERT INTO InstructorConfigs 
VALUES ('21973d13-ad7a-11ec-8ea5-00ff07d630e4', 1, 1, 1, 1)

SELECT * from InstructorConfigs