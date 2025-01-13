import { ImagePlus, ZoomIn, Trash2 } from 'lucide-react';

const CreateGuideFormSection = () => {
  return (
    <section className="min-h-[35rem]">
      <div className="container mx-auto pt-8">
        <form className="grid grid-cols-[29.75rem_23.375rem_13.25rem] grid-rows-2 gap-5">
          <div className="flex flex-col gap-1">
            <label htmlFor="city" className="text-sm text-gray-700">
              City
            </label>
            <select id="city" name="city" className="border p-2">
              <option>City 1</option>
              <option>City 2</option>
              <option>City 3</option>
            </select>
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="country" className="text-sm text-gray-700">
              Country
            </label>
            <select id="country" name="country" className="border p-2">
              <option>Country 1</option>
              <option>Country 2</option>
              <option>Country 3</option>
            </select>
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="date" className="text-sm text-gray-700">
              Date
            </label>
            <input id="date" name="date" type="date" className="border p-2" />
          </div>

          <div className="col-span-2 flex flex-col gap-1">
            <label htmlFor="guideName" className="text-sm text-gray-700">
              Guide name
            </label>
            <input
              id="guideName"
              name="guideName"
              type="text"
              placeholder="The most creative guide name"
              className="border p-2"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="category" className="text-sm text-gray-700">
              Category
            </label>
            <select id="category" name="category" className="border p-2">
              <option>Guide category 1</option>
              <option>Guide category 2</option>
              <option>Guide category 3</option>
            </select>
          </div>

          <div className="relative col-span-3 flex h-60 w-full items-center justify-center bg-dark-color/45">
            <ImagePlus className="h-20 w-20 text-light-color" />
            <input type="file" className="absolute cursor-pointer opacity-0" />
            <div className="absolute bottom-2 right-2 flex gap-2">
              <button type="button">
                <ZoomIn className="h-6 w-6 text-light-color transition hover:text-orange-color" />
              </button>
              <button type="button">
                <Trash2 className="h-6 w-6 text-light-color transition hover:text-orange-color" />
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="col-span-3 mt-4 rounded bg-blue-500 px-4 py-2 text-white transition hover:bg-blue-600"
          >
            Save and post!
          </button>
        </form>
      </div>
    </section>
  );
};

export default CreateGuideFormSection;
