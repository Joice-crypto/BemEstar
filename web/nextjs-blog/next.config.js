/** @type {import('next').NextConfig} */
const nextConfig = {}
module.exports = {
   generateBuildId: async ()=> {
      if(process.env.BUILD.ID){
        return process.env.BUILD.ID;
      }
      else{
        return `${new Date().getTime()}`;
      }
   }
}
module.exports = nextConfig
