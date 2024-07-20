function showContent(option) {
    const centerPane = document.getElementById('center-pane');
    const links = document.querySelectorAll('#left-pane .nav-link');

    // Remove active class from all links
    links.forEach(link => link.classList.remove('active'));

    // Add active class to the clicked link
    document.querySelector(`#left-pane .nav-link[data-option="${option}"]`).classList.add('active');

    centerPane.innerHTML = '';

    switch(option) {
        case 'profile':
            centerPane.innerHTML = `
                <h2>Profile</h2>
                <form>
                    <div class="form-group">
                        <label for="student-id">Student ID</label>
                        <input type="text" class="form-control" id="student-id" value="12345" readonly>
                    </div>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" class="form-control" id="email" value="student@example.com" readonly>
                    </div>
                    <div class="form-group">
                        <label for="name">Name</label>
                        <input type="text" class="form-control" id="name">
                    </div>
                    <div class="form-group">
                        <label for="occupation">Occupation</label>
                        <input type="text" class="form-control" id="occupation">
                    </div>
                    <div class="form-group">
                        <label for="upload-image">Upload Image</label>
                        <input type="file" class="form-control-file" id="upload-image">
                    </div>
                    <button type="submit" class="btn btn-primary">Update</button>
                </form>
            `;
            break;
        case 'my-courses':
            centerPane.innerHTML = `
                <h2>My Courses</h2>
                <div class="course-card">
                    <img src="./assets/images/course.webp" alt="Course 1" width="250" height="200" class="mr-3 mb-3">
                    <div class="course-details">
                        <h4>Learn Python A-Z</h4>
                        <p class="text-muted">Duration: 4 Months</p>
                        <p class="text-muted">Instructor: Rahul Kumar</p>
                        <p>Price: ₹800</p>
                        <button class="btn btn-success mb-1">Course Enrolled</button> &nbsp;
                        <button class="btn btn-primary" onclick="watchCourse('course1')">Watch Course</button>
                    </div>
                </div>
                <div class="course-card">
                    <img src="./assets/images/course.webp" alt="Course 2" width="250" height="200" class="mr-3 mb-3">
                    <div class="course-details">
                        <h4>Learn Python A-Z</h4>
                        <p class="text-muted">Duration: 4 Months</p>
                        <p class="text-muted">Instructor: Rahul Kumar</p>
                        <p>Price: ₹800 </p>
                        <button class="btn btn-success mb-1">Course Enrolled</button> &nbsp;
                        <button class="btn btn-primary" onclick="watchCourse('course1')">Watch Course</button>
                    </div>
                </div>
            `;
            break;
        case 'feedback':
            centerPane.innerHTML = `
                <h2>Feedback</h2>
                <form>
                    <div class="form-group">
                        <label for="student-id">Student ID</label>
                        <input type="text" class="form-control" id="student-id" value="12345" readonly>
                    </div>
                    <div class="form-group">
                        <label for="feedback">Feedback</label>
                        <textarea class="form-control" id="feedback" rows="5"></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            `;
            break;
        case 'subscription':
            centerPane.innerHTML = `
                <h2>Subscription Status</h2>
                <form>
                    <div class="form-group">
                        <label for="acknowledgement-number">Acknowledgement Number</label>
                        <input type="text" class="form-control" id="acknowledgement-number">
                    </div>
                    <button type="submit" class="btn btn-primary">View</button>
                </form>
            `;
            break;
        case 'certificate':
            centerPane.innerHTML = `
                <h2>Certificate</h2>
                <p>Download certificates for completed courses:</p>
                <ul>
                    <li>
                        Course Title 1 &nbsp;
                        <button type="submit" class="btn btn-success">Download Certificate</button>
                    </li>
                    <br>
                    <li>
                        Course Title 2 &nbsp;
                        <button type="submit" class="btn btn-success">Download Certificate</button>
                    </li>
                </ul>
            `;
            break;
        case 'change-password':
            centerPane.innerHTML = `
                <h2>Change Password</h2>
                <form>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" class="form-control" id="email" value="student@example.com" readonly>
                    </div>
                    <div class="form-group">
                        <label for="new-password">New Password</label>
                        <input type="password" class="form-control" id="new-password">
                    </div>
                    <button type="submit" class="btn btn-primary">Update</button>
                </form>
            `;
            break;
    }
}

function showLogoutPrompt() {
    if (confirm('Are you sure you want to Logout?')) {
        window.location.href = 'index.html';
    }
}

function watchCourse(courseId) {
    // Navigate to the course view page with the course ID as a query parameter
    window.location.href = 'watch_course.html?courseId=' + courseId;
}
