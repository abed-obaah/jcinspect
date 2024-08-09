export default function Example() {
    return (
      <form>
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">Modules</h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              We'll always let you know about important changes, but you pick what else you want to hear about.
            </p>
  
            <div className="mt-10">
              <fieldset>
                {/* <legend className="text-sm font-semibold leading-6 text-gray-900">By Email</legend> */}
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6">
                <div className="relative flex gap-x-3">
  <div className="flex h-6 items-center">
    <input
      id="comments"
      name="comments"
      type="checkbox"
      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
    />
  </div>
  <div className="text-sm leading-6">
    <label htmlFor="comments" className="font-medium text-gray-900">
    User Management
    </label>
    {/* <p className="text-gray-500">Get notified when someone posts a comment on a posting.</p> */}

            {/* Mini checkboxes under Comments */}
            <div className="ml-6 mt-2 space-y-2">
            <div className="flex gap-x-3">
                <input
                id="comments-replies"
                name="comments-replies"
                type="checkbox"
                className="h-3 w-3 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
                <label htmlFor="comments-replies" className="text-sm text-gray-700">
                Create
                </label>
            </div>
            <div className="flex gap-x-3">
                <input
                id="comments-likes"
                name="comments-likes"
                type="checkbox"
                className="h-3 w-3 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
                <label htmlFor="comments-likes" className="text-sm text-gray-700">
                Read
                </label>
            </div>
            </div>
        </div>
        </div>

                  <div className="relative flex gap-x-3">
                    <div className="flex h-6 items-center">
                      <input
                        id="candidates"
                        name="candidates"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                    </div>
                    <div className="text-sm leading-6">
                      <label htmlFor="candidates" className="font-medium text-gray-900">
                      Checklist Management
                      </label>
                      {/* <p className="text-gray-500">Get notified when a candidate applies for a job.</p> */}
                    </div>
                  </div>
                  <div className="relative flex gap-x-3">
                    <div className="flex h-6 items-center">
                      <input
                        id="candidates"
                        name="candidates"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                    </div>
                    <div className="text-sm leading-6">
                      <label htmlFor="Inspection" className="font-medium text-gray-900">
                      Inspection
                      </label>
                      {/* <p className="text-gray-500">Get notified when a candidate applies for a job.</p> */}
                    </div>
                  </div>
                  <div className="relative flex gap-x-3">
                    <div className="flex h-6 items-center">
                      <input
                        id="candidates"
                        name="candidates"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                    </div>
                    <div className="text-sm leading-6">
                      <label htmlFor="candidates" className="font-medium text-gray-900">
                      Timesheet Management
                      </label>
                      {/* <p className="text-gray-500">Get notified when a candidate applies for a job.</p> */}
                    </div>
                  </div>
                  <div className="relative flex gap-x-3">
                    <div className="flex h-6 items-center">
                      <input
                        id="candidates"
                        name="candidates"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                    </div>
                    <div className="text-sm leading-6">
                      <label htmlFor="candidates" className="font-medium text-gray-900">
                      Feedback Management
                      </label>
                      {/* <p className="text-gray-500">Get notified when a candidate applies for a job.</p> */}
                    </div>
                  </div>
                  <div className="relative flex gap-x-3">
                    <div className="flex h-6 items-center">
                      <input
                        id="candidates"
                        name="candidates"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                    </div>
                    <div className="text-sm leading-6">
                      <label htmlFor="candidates" className="font-medium text-gray-900">
                      Template Management 
                      </label>
                      {/* <p className="text-gray-500">Get notified when a candidate applies for a job.</p> */}
                    </div>
                  </div>
                  <div className="relative flex gap-x-3">
                    <div className="flex h-6 items-center">
                      <input
                        id="offers"
                        name="offers"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                    </div>
                    <div className="text-sm leading-6">
                      <label htmlFor="offers" className="font-medium text-gray-900">
                      Analytics 
                      </label>
                      {/* <p className="text-gray-500">Get notified when a candidate accepts or rejects an offer.</p> */}
                    </div>
                  </div>
                  <div className="relative flex gap-x-3">
                    <div className="flex h-6 items-center">
                      <input
                        id="push-everything"
                        name="push-notifications"
                        type="radio"
                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                    </div>
                    <div className="text-sm leading-6">
                      <label htmlFor="push-everything" className="font-medium text-gray-900">
                      Project Managment
                      </label>
                      {/* <p className="text-gray-500">Get all notifications via email.</p> */}
                    </div>
                  </div>
                  <div className="relative flex gap-x-3">
                    <div className="flex h-6 items-center">
                      <input
                        id="push-email"
                        name="push-notifications"
                        type="radio"
                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                    </div>
                    <div className="text-sm leading-6">
                      <label htmlFor="push-email" className="font-medium text-gray-900">
                      Certification
                      </label>
                      {/* <p className="text-gray-500">Get notifications as email.</p> */}
                    </div>
                  </div>
                  <div className="relative flex gap-x-3">
                    <div className="flex h-6 items-center">
                      <input
                        id="push-nothing"
                        name="push-notifications"
                        type="radio"
                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                    </div>
                    <div className="text-sm leading-6">
                      <label htmlFor="push-nothing" className="font-medium text-gray-900">
                      Performance
                      </label>
                      {/* <p className="text-gray-500">No notifications will be sent.</p> */}
                    </div>
                  </div>
                </div>
              </fieldset>
            </div>
          </div>
        </div>
      </form>
    );
  }
  