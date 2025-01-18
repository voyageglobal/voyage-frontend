import { useState } from 'react';
import { ImagePlus, ZoomIn, Trash2 } from 'lucide-react';
import TipTapEditor from '../../components/common/TipTapEditor/TipTapEditor';
import DnDFileUploadZone from '../../components/common/Drag-n-drop/DnDFileUploadZone';
import useSubmitGuide from '../../hooks/useSubmitGuide';

const CreateGuideFormSection = () => {
  const [guideContent, setGuideContent] = useState('');
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const { mutate, isLoading } = useSubmitGuide();

  const handleSubmit = e => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('city', e.target.city.value);
    formData.append('country', e.target.country.value);
    formData.append('date', e.target.date.value);
    formData.append('guideName', e.target.guideName.value);
    formData.append('category', e.target.category.value);
    formData.append('guideContent', guideContent);

    uploadedFiles.forEach((file, index) => {
      formData.append(`photos[${index}]`, file.file);
    });

    mutate(formData);
  };

  return (
    <section className="min-h-[35rem]">
      <div className="container mx-auto pt-8">
        <form
          className="grid grid-cols-[29.75rem_23.375rem_13.25rem] grid-rows-2 gap-5"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col gap-1">
            <label htmlFor="city" className="text-sm text-dark-color">
              City
            </label>
            <select id="city" name="city" className="border p-2">
              <option>City 1</option>
              <option>City 2</option>
              <option>City 3</option>
            </select>
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="country" className="text-sm text-dark-color">
              Country
            </label>
            <select id="country" name="country" className="border p-2">
              <option>Country 1</option>
              <option>Country 2</option>
              <option>Country 3</option>
            </select>
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="date" className="text-sm text-dark-color">
              Date
            </label>
            <input id="date" name="date" type="date" className="border p-2" />
          </div>

          <div className="col-span-2 flex flex-col gap-1">
            <label htmlFor="guideName" className="text-sm text-dark-color">
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
            <label htmlFor="category" className="text-sm text-dark-color">
              Category
            </label>
            <select id="category" name="category" className="border p-2">
              <option>Guide category 1</option>
              <option>Guide category 2</option>
              <option>Guide category 3</option>
            </select>
          </div>

          <section className="col-span-3">
            <label htmlFor="cover" className="text-sm text-dark-color">
              Upload the cover for your guide
            </label>
            <div className="relative flex h-60 w-full items-center justify-center bg-dark-color/45">
              <ImagePlus className="h-20 w-20 text-light-color transition hover:text-orange-color" />
              <input
                id="cover"
                type="file"
                className="absolute h-full w-full cursor-pointer opacity-0"
              />
              <div className="absolute bottom-2 right-2 flex gap-2">
                <button type="button">
                  <ZoomIn className="h-6 w-6 text-light-color transition hover:text-orange-color" />
                </button>
                <button type="button">
                  <Trash2 className="h-6 w-6 text-light-color transition hover:text-orange-color" />
                </button>
              </div>
            </div>
          </section>

          <div className="col-span-3">
            <label className="text-sm text-dark-color">
              Enter the text of your guide here! It would be cool if you could
              include prices for admission tickets, lifehacks, annual events, or
              some ways to save money!
            </label>
            <TipTapEditor setContent={setGuideContent} />
          </div>
          <label htmlFor="photo" className="mb-2 block text-dark-color">
            Upload the photo for your guide
          </label>
          <section className="col-span-3 mx-auto w-full rounded py-8 shadow-md">
            <DnDFileUploadZone onUpload={setUploadedFiles} />
          </section>

          <div className="col-span-3 flex justify-center">
            <button
              type="submit"
              className={`mt-4 w-80 rounded bg-orange-color px-4 py-2 text-white ${
                isLoading ? 'cursor-not-allowed opacity-50' : ''
              }`}
              disabled={isLoading}
            >
              {isLoading ? 'Is sending...' : 'Save and post!'}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default CreateGuideFormSection;
