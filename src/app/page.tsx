import LayoutColumn from '../components/Layouts/LayoutColumn/page';
import LayoutWithImage from '../components/Layouts/LayoutWithImage/page';

export default function Home() {
  return (
    <main className='min-h-[85vh] max-w-[95vw] items-center justify-between px-24 py-6'>
      <div className='flex h-full w-full flex-col gap-8 p-4'>
        <div className='flex'>
          <LayoutWithImage
            path='/article/'
            image={'/images/laptop.jpeg'}
            alt='laptop'
            title={'lorem asdhjahsdjh kajsdjl kasdk  ksadkk kasdjk'}
            paragraph={
              'lorem12asddasdkaj kldsjkasjdklj askldjaskljd klasjdkl jaskdj kasjdk jasdk jaklsdj kasjd kasjd kjaskd jkasjdkajsdk jaskdj aksdj kasjd kjsak jkasjd kasjdk jaskdj kasjd iasudiuqwei ma mbawn eqwheqfw yf ycxuzhcio qow90 a9sudiowqej '
            }
          />

          <LayoutColumn
            path='/article/2'
            title={'lorem asdhjahsdjh kajsdjl kasdk  ksadkk kasdjk'}
            paragraph={
              'lorem12asddasdkaj kldsjkasjdklj askldjaskljd klasjdkl jaskdj kasjdk jasdk jaklsdj kasjd kasjd kjaskd jkasjdkajsdk jaskdj aksdj kasjd kjsak jkasjd kasjdk jaskdj kasjd iasudiuqwei ma mbawn eqwheqfw yf ycxuzhcio qow90 a9sudiowqej '
            }
          />
        </div>

        <div className='flex flex-row-reverse'>
          <LayoutWithImage
            path='/article/'
            image={'/images/laptop.jpeg'}
            alt='laptop'
            title={'lorem asdhjahsdjh kajsdjl kasdk  ksadkk kasdjk'}
            paragraph={
              'lorem12asddasdkaj kldsjkasjdklj askldjaskljd klasjdkl jaskdj kasjdk jasdk jaklsdj kasjd kasjd kjaskd jkasjdkajsdk jaskdj aksdj kasjd kjsak jkasjd kasjdk jaskdj kasjd iasudiuqwei ma mbawn eqwheqfw yf ycxuzhcio qow90 a9sudiowqej '
            }
          />

          <LayoutColumn
            path='/article/2'
            title={'lorem asdhjahsdjh kajsdjl kasdk  ksadkk kasdjk'}
            paragraph={
              'lorem12asddasdkaj kldsjkasjdklj askldjaskljd klasjdkl jaskdj kasjdk jasdk jaklsdj kasjd kasjd kjaskd jkasjdkajsdk jaskdj aksdj kasjd kjsak jkasjd kasjdk jaskdj kasjd iasudiuqwei ma mbawn eqwheqfw yf ycxuzhcio qow90 a9sudiowqej '
            }
          />

          <LayoutColumn
            path='/article/2'
            title={'lorem asdhjahsdjh kajsdjl kasdk  ksadkk kasdjk'}
            paragraph={
              'lorem12asddasdkaj kldsjkasjdklj askldjaskljd klasjdkl jaskdj kasjdk jasdk jaklsdj kasjd kasjd kjaskd jkasjdkajsdk jaskdj aksdj kasjd kjsak jkasjd kasjdk jaskdj kasjd iasudiuqwei ma mbawn eqwheqfw yf ycxuzhcio qow90 a9sudiowqej '
            }
          />
        </div>

        <div className='flex justify-center'>
          <LayoutWithImage
            path='/article/'
            image={'/images/laptop.jpeg'}
            alt='laptop'
            title={'lorem asdhjahsdjh kajsdjl kasdk  ksadkk kasdjk'}
            paragraph={
              'lorem12asddasdkaj kldsjkasjdklj askldjaskljd klasjdkl jaskdj kasjdk jasdk jaklsdj kasjd kasjd kjaskd jkasjdkajsdk jaskdj aksdj kasjd kjsak jkasjd kasjdk jaskdj kasjd iasudiuqwei ma mbawn eqwheqfw yf ycxuzhcio qow90 a9sudiowqej '
            }
          />
        </div>
      </div>
    </main>
  );
}
