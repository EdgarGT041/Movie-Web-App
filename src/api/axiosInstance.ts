import axios from "axios";

export const baseApi=axios.create({
    baseURL: "https://api.themoviedb.org",
                    headers: {
                        accept: 'application/json',
                        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZjBhMTg3OTNmN2QxZjE3ODQ0ZWE4OWJkNTdhYzk5YiIsIm5iZiI6MTc2OTQ3OTk1Mi41MTgwMDAxLCJzdWIiOiI2OTc4MWYxMGRkZjBlYmUxYTQ2OTUyNDAiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.w4vYQALYLhVi1EBH1LYJJ0N6gmbsARtju5NBVGum5I0'
                    }
})
