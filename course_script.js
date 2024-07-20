function loadCourseModules() {
    const urlParams = new URLSearchParams(window.location.search);
    const courseId = urlParams.get('courseId');

    const modulesList = document.getElementById('modules-list');
    const videoContainer = document.getElementById('video-container');

    // Dummy data for modules and videos
    const courseData = {
        course1: {
            title: 'Course 1',
            modules: [
                { id: 'module1', title: 'Module 1', videoUrl: 'https://www.example.com/video1.mp4' },
                { id: 'module2', title: 'Module 2', videoUrl: 'https://www.example.com/video2.mp4' },
            ]
        },
        course2: {
            title: 'Course 2',
            modules: [
                { id: 'module1', title: 'Module 1', videoUrl: 'https://www.example.com/video3.mp4' },
                { id: 'module2', title: 'Module 2', videoUrl: 'https://www.example.com/video4.mp4' },
            ]
        }
    };

    const course = courseData[courseId];
    if (course) {
        course.modules.forEach(module => {
            const moduleItem = document.createElement('li');
            moduleItem.className = 'nav-item';
            moduleItem.innerHTML = `<a class="nav-link" style="color: black !important" href="#" onclick="playVideo('${module.videoUrl}')">${module.title}</a> <hr/>`;
            modulesList.appendChild(moduleItem);
        });

        // Play the first video by default
        if (course.modules.length > 0) {
            playVideo(course.modules[0].videoUrl);
        }
    } else {
        videoContainer.innerHTML = '<p>Course not found.</p>';
    }
}

function playVideo(videoUrl) {
    const videoContainer = document.getElementById('video-container');
    videoContainer.innerHTML = `
        <video width="100%" controls>
            <source src="${videoUrl}" type="video/mp4">
            Your browser does not support the video tag.
        </video>
    `;
}
