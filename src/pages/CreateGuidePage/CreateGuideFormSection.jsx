import { useForm, Controller } from 'react-hook-form';
import clsx from 'clsx';
import TipTapEditor from '../../components/common/TipTapEditor/TipTapEditor';
import DnDWithBackground from '../../components/common/Drag-n-drop/DnDWithBackground';
import DnDWithItemList from '../../components/common/Drag-n-drop/DnDWithItemList';
import useSubmitGuide from '../../hooks/useSubmitGuide';
import CountrySelect from './CountrySelect';
import CitySelect from './CitySelect';
import CategorySelect from './CategorySelect';

const ErrorMessage = ({ errors, fieldName }) =>
  errors?.[fieldName] ? (
    <p className="m-1 font-fourth text-red-600">
      {errors[fieldName].message || 'Error!'}
    </p>
  ) : null;

const labelStyle = 'font-fourth text-lg font-bold italic text-dark-color';
const textInputStyle =
  'h-12 w-full rounded-10px border border-orange-color bg-orange-color/15 px-4 font-fourth text-lg text-dark-color focus:border-2 focus:border-orange-color focus:outline-none';

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

  const selectedCountry = watch('country');

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
          <section className="grid grid-cols-3 grid-rows-2 gap-5">
            <div className="col-span-1 flex flex-col gap-1">
              <label htmlFor="country" className={clsx(labelStyle)}>
                Write the name of the county of your guide
              </label>
              <Controller
                name="country"
                control={control}
                rules={{
                  required: 'Please select a country',
                }}
                render={({ field: { onChange, name } }) => (
                  <div>
                    <CountrySelect
                      id={name}
                      title={name}
                      onChange={selectedOption => {
                        onChange(selectedOption?.label);
                      }}
                    />
                    <ErrorMessage errors={errors} fieldName="country" />
                  </div>
                )}
              />
            </div>

            <div className="col-span-1 flex flex-col gap-1">
              <label htmlFor="city" className={clsx(labelStyle)}>
                Write the name of the city of your guide
              </label>
              <Controller
                name="city"
                control={control}
                rules={{
                  required: 'Please select a city',
                }}
                render={({ field: { onChange, name } }) => (
                  <div>
                    <CitySelect
                      id={name}
                      title={name}
                      key={selectedCountry}
                      searchQuery={selectedCountry}
                      onChange={selectedOption => {
                        onChange(selectedOption?.value);
                      }}
                      isDisabled={!selectedCountry}
                    />
                    <ErrorMessage errors={errors} fieldName="city" />
                  </div>
                )}
              />
            </div>

            <div className="col-span-1 flex flex-col gap-1">
              <label htmlFor="date" className={clsx(labelStyle)}>
                Date of visit
              </label>
              <input
                {...register('date', {
                  required: 'Please select a date',
                })}
                id="date"
                type="date"
                className={clsx(textInputStyle)}
              />
              <ErrorMessage errors={errors} fieldName="date" />
            </div>

            <div className="col-span-2 flex flex-col gap-1">
              <label htmlFor="guideName" className={clsx(labelStyle)}>
                Guide name
              </label>
              <input
                {...register('guideName', {
                  required: 'Please write a guide name',
                  minLength: { value: 5, message: 'Minimum 5 characters' },
                })}
                id="guideName"
                type="text"
                placeholder="Write here your most creative guide name"
                className={clsx(textInputStyle)}
              />
              <ErrorMessage errors={errors} fieldName="guideName" />
            </div>

            <div className="col-span-1 flex flex-col gap-1">
              <label htmlFor="category" className={clsx(labelStyle)}>
                Type of guide
              </label>
              <Controller
                name="category"
                control={control}
                rules={{
                  required: 'Please select a category',
                }}
                render={({ field: { onChange } }) => (
                  <div>
                    <CategorySelect
                      id="category"
                      onChange={selectedOption => {
                        onChange(selectedOption?.value);
                      }}
                    />
                    <ErrorMessage errors={errors} fieldName="category" />
                  </div>
                )}
              />
            </div>
          </section>

          <section className="col-span-3 pt-8">
            <label htmlFor="coverImage" className={clsx(labelStyle)}>
              Upload the cover for your guide
            </label>
            <Controller
              name="coverImage"
              control={control}
              rules={{
                required: 'Cover image is required',
              }}
              render={({ field: { onChange, name } }) => (
                <div className="pt-8">
                  <DnDWithBackground id={name} onChange={onChange} />
                  <ErrorMessage errors={errors} fieldName="coverImage" />
                </div>
              )}
            />
          </section>

          <section className="col-span-3 pt-8">
            <label className={clsx(labelStyle)}>
              Enter the text of your guide here! It would be cool if you could
              include prices for admission tickets, lifehacks, annual events, or
              some ways to save money!
            </label>
            <Controller
              name="guideContent"
              control={control}
              rules={{
                required:
                  'Please write your guide and share your adventure with the world!',
                minLength: {
                  value: 10,
                  message: 'Minimum 10 characters required',
                },
              }}
              render={({ field }) => (
                <div className="pt-8">
                  <TipTapEditor setContent={field.onChange} />
                  <ErrorMessage errors={errors} fieldName="guideContent" />
                </div>
              )}
            />
          </section>

          <section className="col-span-3 pt-8">
            <label htmlFor="guideImages" className={clsx(labelStyle)}>
              Upload the photo for your guide
            </label>
            <Controller
              name="guideImages"
              control={control}
              rules={{
                required: 'At least one file is required',
              }}
              render={({ field: { onChange, name } }) => (
                <div className="pt-8">
                  <DnDWithItemList id={name} onChange={onChange} />
                  <ErrorMessage errors={errors} fieldName="guideImages" />
                </div>
              )}
            />
          </section>

          <div className="col-span-3 flex justify-center">
            <button
              type="submit"
              aria-label="Save and post the guide"
              className={`mt-4 w-80 rounded-10px bg-orange-color px-4 py-2 font-fourth uppercase text-white transition ${
                isLoading
                  ? 'cursor-not-allowed opacity-50'
                  : 'hover:bg-dark-color'
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
