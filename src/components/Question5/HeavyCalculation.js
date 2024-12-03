import React, { useMemo } from 'react';

const HeavyCalculation = ({ num }) => {
    console.log('HeavyCalculation Component Rendered!');

    // Simulating a heavy computation
    const computeFactorial = (n) => {
        console.log('Performing heavy calculation...');
        if (n < 0) return 0;
        return n <= 1 ? 1 : n * computeFactorial(n - 1);
    };

    // Memoize the result to prevent recomputation
    const factorial = useMemo(() => computeFactorial(num), [num]);

    return (
        <div className="p-4 mt-4 bg-gray-100 border rounded shadow">
            <h2 className="text-xl font-bold">Heavy Calculation</h2>
            <p>
                Factorial of <strong>{num}</strong>: <strong>{factorial}</strong>
            </p>
        </div>
    );
};

export default React.memo(HeavyCalculation);
