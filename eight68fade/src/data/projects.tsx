// import axios from 'axios';

// export interface Project {
//   name: string;
//   brand: string;
//   type: string;
//   duration: string;
//   src: string;
// }

// const fetchProjects = async (): Promise<Project[]> => {
//   try {
//     const response = await axios.get('http://localhost:1337/api/projects?populate=*', {
//       headers: {
//         Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
//       },
//     });
//     console.log('API response:', response.data); // Debugging statement

//     const projectData = response.data.data.map((project: any) => ({
//       name: project.attributes.name,
//       brand: project.attributes.brand,
//       type: project.attributes.type,
//       duration: project.attributes.duration,
//       src: `${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}${project.attributes.video.data.attributes.url}`, // Adjust this based on the actual structure of your media field
//     }));
//     console.log('Mapped project data:', projectData); // Debugging statement

//     return projectData;
//   } catch (error) {
//     console.error('Error fetching projects:', error);
//     return [];
//   }
// };

// export default fetchProjects;


export const Projects = [
    {
      name: "eight68fade",
      brand: "@eight68fade_barbershop",
      type: "",
      duration: "01:19",
      src: "/videos/video1.mp4",
    },
    {
      name: "eight68fade",
      brand: "@eight68fade_barbershop",
      type: "",
      duration: "00:30",
      src: "/videos/video2.mp4",
    },
    {
      name: "eight68fade",
      brand: "@eight68fade_barbershop",
      type: "",
      duration: "01:00",
      src: "/videos/video3.mp4",
    },
    {
      name: "eight68fade",
      brand: "@eight68fade_barbershop",
      type: "",
      duration: "00:21",
      src: "/videos/video4.mp4",
    },
    {
      name: "eight68fade",
      brand: "@eight68fade_barbershop",
      type: "",
      duration: "00:15",
      src: "/videos/video5.mp4",
    },
    {
      name: "eight68fade",
      brand: "@eight68fade_barbershop",
      type: "",
      duration: "00:46",
      src: "/videos/video6.mp4",
    },
    {
      name: "eight68fade",
      brand: "@eight68fade_barbershop",
      type: "",
      duration: "00:18",
      src: "/videos/video7.mp4",
    },
    {
      name: "eight68fade",
      brand: "@eight68fade_barbershop",
      type: "",
      duration: "00:03",
      src: "/videos/video8.mp4",
    },
  ];