import { ProxyState } from "../AppState.js";
import Job from "../Models/Job.js";
import { api } from '../Services/AxiosService.js';

class JobService {
  constructor() {
    this.getJobs()
  }
  getJobs() {
    api.get("Jobs").then(res => {
      ProxyState.Jobs = res.data.data.map(rawJobData => new Job(rawJobData))
    }).catch(err => console.error(err))
  }

  postJob(newJob) {
    api.post("Job", newJob).then(res => {
      this.getJobs()
    }).catch(err => console.error(err))
  }
  editJob(editedJob) {
    api.put("Jobs/" + editedJob._id, editedJob).then(res => {
      //TODO add this to page without reloading
      this.getJobs()
    }).catch(err => console.error(err))
  }

  deleteJob(JobId) {
    api.delete("Jobs/" + JobId).then(res => {
      console.log(res.data);
      this.getJobs()
    }).catch(err => console.error(err))
  }
}

export const JobService = new JobService();

