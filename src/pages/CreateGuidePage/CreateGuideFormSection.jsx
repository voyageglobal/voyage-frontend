import { useForm, Controller } from 'react-hook-form';
import TipTapEditor from '../../components/common/TipTapEditor/TipTapEditor';
import DnDWithBackground from '../../components/common/Drag-n-drop/DnDWithBackground';
import DnDWithItemList from '../../components/common/Drag-n-drop/DnDWithItemList';
import useSubmitGuide from '../../hooks/useSubmitGuide';
import CountrySelect from './CountrySelect';
import CitySelect from './CitySelect';

const ErrorMessage = ({ errors, fieldName }) =>
  errors?.[fieldName] ? (
    <p className="text-red-600">{errors[fieldName].message || 'Error!'}</p>
  ) : null;

const CreateGuideFormSection = () => {
  const {
    register,
    control,
    watch,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: 'onBlur',
    defaultValues: {
      guideContent: '',
      coverImage: [],
      guideImages: [],
    },
  });

  const resetForm = () => {
    reset();
  };

  const { mutate, isLoading } = useSubmitGuide({ resetForm });

  const onSubmit = data => {
    console.log(data);
    mutate({ data });
  };

  return (
    <section className="min-h-[35rem]">
      <div className="container mx-auto pt-8">
        <form onSubmit={handleSubmit(onSubmit)}>
          <section className="grid grid-cols-[29.75rem_23.375rem_13.25rem] grid-rows-2 gap-5">
            <div className="flex flex-col gap-1">
              <label
                htmlFor="country"
                className="font-fourth text-lg font-bold italic text-dark-color"
              >
                Write the name of the county of your guide
              </label>
              <Controller
                name="country"
                control={control}
                rules={{
                  required: 'Please select a country',
                }}
                render={({ field: { onChange }, fieldState }) => (
                  <div className="pt-1.5">
                    <CountrySelect
                      id="country"
                      onChange={selectedOption => {
                        onChange(selectedOption?.value);
                      }}
                    />
                    {fieldState.error && (
                      <span className="text-red-500">
                        {fieldState.error.message}
                      </span>
                    )}
                  </div>
                )}
              />
            </div>

            <div className="flex flex-col gap-1">
              <label
                htmlFor="city"
                className="font-fourth text-lg font-bold italic text-dark-color"
              >
                Write the name of the city of your guide
              </label>
              <Controller
                name="city"
                control={control}
                rules={{
                  required: 'Please select a city',
                }}
                render={({ field: { onChange }, fieldState }) => (
                  <div className="pt-1.5">
                    <CitySelect
                      id="city"
                      searchQuery={watch('country')}
                      onChange={selectedOption => {
                        onChange(selectedOption?.value);
                      }}
                      isDisabled={!watch('country')}
                    />
                    {fieldState.error && (
                      <span className="text-red-500">
                        {fieldState.error.message}
                      </span>
                    )}
                  </div>
                )}
              />
            </div>

            <div className="flex flex-col gap-1">
              <label
                htmlFor="date"
                className="font-fourth text-lg font-bold italic text-dark-color"
              >
                Date of visit
              </label>
              <input
                {...register('date', {
                  required: 'Please select a date',
                })}
                id="date"
                name="date"
                type="date"
                className="border p-2"
              />
              <ErrorMessage errors={errors} fieldName="date" />
            </div>

            <div className="col-span-2 flex flex-col gap-1">
              <label htmlFor="guideName" className="text-sm text-dark-color">
                Guide name
              </label>
              <input
                {...register('guideName', {
                  required: 'Please write a guide name',
                  minLength: { value: 5, message: 'Minimum 5 characters' },
                })}
                id="guideName"
                name="guideName"
                type="text"
                placeholder="The most creative guide name"
                className="border p-2"
              />
              <ErrorMessage errors={errors} fieldName="guideName" />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="category" className="text-sm text-dark-color">
                Category
              </label>
              <select
                {...register('category', {
                  required: 'Please select a category',
                })}
                id="category"
                name="category"
                className="border p-2"
              >
                <option>Guide category 1</option>
                <option>Guide category 2</option>
                <option>Guide category 3</option>
              </select>
              <ErrorMessage errors={errors} fieldName="category" />
            </div>
          </section>

          <section className="col-span-3">
            <label htmlFor="coverImage" className="text-sm text-dark-color">
              Upload the cover for your guide
            </label>
            <Controller
              name="coverImage"
              control={control}
              rules={{
                required: 'Cover image is required',
              }}
              render={({ field: { onChange, name }, fieldState }) => (
                <div>
                  <DnDWithBackground id={name} onChange={onChange} />
                  {fieldState.error && (
                    <span className="text-red-500">
                      {fieldState.error.message}
                    </span>
                  )}
                </div>
              )}
            />
          </section>

          <section className="col-span-3">
            <label className="text-sm text-dark-color">
              Enter the text of your guide here! It would be cool if you could
              include prices for admission tickets, lifehacks, annual events, or
              some ways to save money!
            </label>
            <Controller
              name="guideContent"
              control={control}
              rules={{
                required: 'Content is required',
                minLength: {
                  value: 10,
                  message: 'Minimum 10 characters required',
                },
              }}
              render={({ field, fieldState }) => (
                <div>
                  <TipTapEditor setContent={field.onChange} />
                  {fieldState.error && (
                    <span className="text-red-500">
                      {fieldState.error.message}
                    </span>
                  )}
                </div>
              )}
            />
          </section>

          <section className="col-span-3">
            <label htmlFor="guideImages" className="mb-2 block text-dark-color">
              Upload the photo for your guide
            </label>
            <Controller
              name="guideImages"
              control={control}
              rules={{
                required: 'At least one file is required',
              }}
              render={({ field: { onChange, name }, fieldState }) => (
                <div>
                  <DnDWithItemList id={name} onChange={onChange} />
                  {fieldState.error && (
                    <span className="text-red-500">
                      {fieldState.error.message}
                    </span>
                  )}
                </div>
              )}
            />
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
