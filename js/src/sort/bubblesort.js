


var bubblesort = function ( pred, a, i, j ) {

	var swapped, k, s, t;

	s = j - 1;

	do {

		// we stop if the array is sorted
		// i.e. if no swap was required
		// in this step

		swapped = false;

		for ( k = i ; k < s ; ++k ) {

			if ( !pred( a[k], a[k + 1] ) ) {

				// swap boxes

				t = a[k];
				a[k] = a[k + 1];
				a[k + 1] = t;

				swapped = true;

			}

		}

	} while ( swapped );
};

exports.bubblesort = bubblesort;