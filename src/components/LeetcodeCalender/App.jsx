import LeetCodeCalendar from 'leetcode-calendar';

export default function LeetcodeCal() {
    const exampleTheme = {
        light: [
            'rgb(235, 235, 235)',
            'rgba(192, 132, 245, 0.44)',
            'rgba(192, 132, 245, 0.6)',
            'rgba(192, 132, 245, 0.76)',
            'rgba(192, 132, 245, 0.92)',
          ],
          dark: [
            'rgb(235, 235, 235)',
            'rgba(192, 132, 245, 0.44)',
            'rgba(192, 132, 245, 0.6)',
            'rgba(192, 132, 245, 0.76)',
            'rgba(192, 132, 245, 0.92)',
          ],
    };

    return (
        <div className='text-center bg-[#0a0a0a] text-white '>
            <h1 className='text-2xl p-4 hidden lg:block'>Day I <span className='text-blue-700 font-semibold'>LeetCode</span></h1>
            <div className='bg-[#0a0a0a] text-white hidden justify-center text-center lg:flex'>
                <LeetCodeCalendar
                    username='haldershubhendu2' // Replace with your LeetCode username
                    blockSize={15} // Default block size
                    blockMargin={5} // Default block margin
                    fontSize={16} // Default font size
                    theme={exampleTheme} // Optional: Custom theme for the calendar
                />
            </div>
        </div>
    );
}
