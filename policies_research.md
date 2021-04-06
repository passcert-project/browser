# Policies Mentioned in Research


| Policy Annotation | Policy Description | Minimum Length |  Work |
:---: | :---: | :---: | :---:
|_1c8_| At least 1 character class | 8 | [Tan et al.](https://www.andrew.cmu.edu/user/nicolasc/publications/Tan-CCS20.pdf)|
|_1c10_| At least 1 character class | 10 | [Tan et al.](https://www.andrew.cmu.edu/user/nicolasc/publications/Tan-CCS20.pdf)
|_1c12_| At least 1 character class | 12 | [Tan et al.](https://www.andrew.cmu.edu/user/nicolasc/publications/Tan-CCS20.pdf)
|_1c16_| At least 1 character class | 16 | [Tan et al.](https://www.andrew.cmu.edu/user/nicolasc/publications/Tan-CCS20.pdf)
|_3c8_| At least 3 character classes | 8 | [Tan et al.](https://www.andrew.cmu.edu/user/nicolasc/publications/Tan-CCS20.pdf)
|_3c12_| At least 3 character classes | 12 | [Tan et al.](https://www.andrew.cmu.edu/user/nicolasc/publications/Tan-CCS20.pdf)
|_4c8_| At least 4 character classes | 8 | [Tan et al.](https://www.andrew.cmu.edu/user/nicolasc/publications/Tan-CCS20.pdf)
|_comp8_| At least 1 lowercase English letter, 1 uppercase English letter, 1 digit and 1 symbol (something that is not a digit or an English letter) --- Taken together, the letters must not form a word in our dictionary | 8 | [Shay et al.](https://dl.acm.org/doi/pdf/10.1145/2891411) | 
|_basic12_|At least 12 characters | 12 | [Shay et al.](https://dl.acm.org/doi/pdf/10.1145/2891411)
|_basic16_|At least 16 characters | 16 | [Shay et al.](https://dl.acm.org/doi/pdf/10.1145/2891411)
|_basic20_|At least 20 characters | 20 | [Shay et al.](https://dl.acm.org/doi/pdf/10.1145/2891411)
|_2class12_|At least 2 character classes |12| [Shay et al.](https://dl.acm.org/doi/pdf/10.1145/2891411)
|_3class12_|At least 3 character classes |12| [Shay et al.](https://dl.acm.org/doi/pdf/10.1145/2891411)
|_3class16_|At least 3 character classes |16| [Shay et al.](https://dl.acm.org/doi/pdf/10.1145/2891411)
|_2word12_|At least 2 words (letter sequences separated by a nonletter sequence)|12| [Shay et al.](https://dl.acm.org/doi/pdf/10.1145/2891411)
|_2word16_|At least 2 words (letter sequences separated by a nonletter sequence)|16| [Shay et al.](https://dl.acm.org/doi/pdf/10.1145/2891411)
|_2list12_| Combines _2class12_ with the [blacklist](#blacklist) |12| [Shay et al.](https://dl.acm.org/doi/pdf/10.1145/2891411)
|_2s-list12_| Combines _2class12_ with the [warning](#blacklist-warning) |12| [Shay et al.](https://dl.acm.org/doi/pdf/10.1145/2891411)
|_2pattern12_| Combines _2class12_ with the [pattern](#pattern) requirement |12| [Shay et al.](https://dl.acm.org/doi/pdf/10.1145/2891411)
|_2list-patt12_| Combines the _2class12_ with the [pattern](#pattern) requirements and the [blacklist](#blacklist)|12| [Shay et al.](https://dl.acm.org/doi/pdf/10.1145/2891411)
|_2s-list-patt12_| Combines the _2class12_ with the [pattern](#pattern) requirements and the [warning](#blacklist-warning)|12| [Shay et al.](https://dl.acm.org/doi/pdf/10.1145/2891411)

## Character Classes 
- Uppercase Letters
- Lowercase Letters
- Digits
- Symbols

## Blacklist Warning
From [Shay et al.'s](https://dl.acm.org/doi/pdf/10.1145/2891411) work:

- Participants in _2s-list12_ were told ***“Do not include words commonly found in passwords (e.g. password), keyboard patterns (e.g., qazx), or other common patterns (e.g. 5678).”***
## Blacklist

From [Shay et al.'s](https://dl.acm.org/doi/pdf/10.1145/2891411) work:

- Participants in _2list12_ saw an explicit list of blacklisted substrings:
    - _123!_, _amazon_, _character_, _monkey_, _number_, _survey_, _this_, _turk_ 
    - Any year between 1950 and 2049
    - The same character four or more times in a row
    - Any four consecutive characters from password
    - Any four sequential digits (e.g., 5678)
    - Any four sequential letters in the alphabet (e.g., wxyz)
    - Any four consecutive characters on the keyboard (e.g., wsxc)

## Pattern

- The password should start and end with a _lowercase_ letter. 