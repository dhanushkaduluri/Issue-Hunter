import Project from '../models/project.js';

export const home = async (req, res) => {
  try {
    let projects = await Project.find({}).sort('-createdAt');
    return res.render('home', {
      title: 'Issue Tracker | Home',
      projects,
    });
  } catch (err) {
    console.log('Error', err);
    return;
  }
};
