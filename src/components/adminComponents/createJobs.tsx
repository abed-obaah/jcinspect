import SelectJobs from '../adminComponents/SelectJobSite'
import SelectInspector from '../adminComponents/SelectClient'
import MobilizeDetails from '../adminComponents/MobilizeDetailsScope'


export default function Example() {

  return (
    <div className="overflow-hidden rounded-lg bg-white shadow">
      <div className="px-4 py-5 sm:p-6">
        <h1 className="text-xl font-semibold mb-4">create Jobs</h1>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-1">
           <div className="col-span-full">
             
              <div className="mt-2 justify-center rounded-lg border border-dashed border-indigo-500 px-6 py-10">
                  

                <div className="text-center mb-10">
                 <SelectJobs/>
                
                </div>
                <div className="text-center">
                 <SelectInspector/>
               
                </div>
                <div className="flex justify-center mt-10">
                <MobilizeDetails />
               
                </div>
                
              </div>
            </div>
         
        </div>
       

      </div>
    </div>
  );
}
