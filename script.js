const words = ["tinky", "abbey", "jeanie", "fluffy", "watson", "dachsund", "hwarang", "taekwondo", "jingle", "elaina", "shana", "lindsey", "jonathan", "jayden", "locke", "chase", "blue", "walmart", "zach", "shoe", "highlighter", "vroom", "slime", "abbey", "baytown", "minecraft", "tekken", "gracen", "alamo", "calvin", "sonic", "lulu", "augie", "chester", "ellie", "whoopie", "samantha", "hangman", "sage", "takis", "mcelroy", "kelly", "sprano", "tilton", "peters", "hall", "krystal", "gimpy", "dylo", "astro", "loki", "tai", "pickle", "cookie", "francisco", "scout", "duncan", "mumble", "zoey", "cheesepuff", "clip", "used", "whip", "successful", "skinny", "letter", "trite", "slim", "chance", "grade", "powerful", "divergent", "mellow", "terrific", "cuddly", "avoid", "plastic", "finicky", "feeble", "search", "cook", "skirt", "omniscient", "passenger", "grape", "adventurous", "flashy", "brainy", "fast", "voiceless", "ordinary", "bizarre", "earth", "placid", "obey", "dime", "step", "substantial", "real", "early", "curtain", "untidy", "year", "laborer", "smile", "useful", "appreciate", "boundary", "continue", "intend", "obscene", "rice", "deliver", "grease", "save", "unbiased", "reward", "dust", "kiss", "quick", "attend", "brash", "lewd", "jealous", "hall", "bouncy", "death", "irritating", "quicksand", "glove", "turn", "flimsy", "wool", "listen", "snore", "dysfunctional", "outgoing", "earthy", "unruly", "ugliest", "drag", "transport", "plain", "shaky", "cats", "curved", "nervous", "snow", "glistening", "sleepy", "example", "shelter", "alarm", "accidental", "delirious", "haunt", "occur", "rinse", "rabbit", "food", "fresh", "file", "scarf", "provide", "metal", "robust", "boast", "jelly", "ignorant", "wild", "bird", "injure", "like", "energetic", "base", "drawer", "ruddy", "inform", "icicle", "volleyball", "silk", "promise", "sister", "coherent", "first", "finger", "female", "toes", "free", "admit", "half", "lunch", "selective", "perform", "cabbage", "juggle", "bushes", "error", "lovely", "friend", "count", "paint", "scold", "shave", "grip", "north", "third", "squeak", "festive", "uncovered", "profuse", "mess up", "slip", "beef", "psychotic", "evasive", "sharp", "hand", "abortive", "bounce", "glib", "pear", "interfere", "whimsical", "hands", "quince", "impartial", "snotty", "wistful", "shocking", "retire", "guarantee", "spiteful", "careless", "faithful", "camp", "craven", "unequal", "uttermost", "hanging", "oafish", "horn", "elbow", "flowers", "bubble", "glossy", "zipper", "shaggy", "include", "payment", "signal", "workable", "frail", "berry", "lying", "elderly", "afford", "aback", "table", "discussion", "exclusive", "swim", "closed", "moor", "illegal", "bitter", "superficial", "visit", "object", "aftermath", "move", "rhetorical", "blue", "foregoing", "judge", "hunt", "record", "dinosaurs", "nice", "bent", "puncture", "yummy", "support", "rock", "detailed", "delightful", "behave", "hospitable", "fasten", "regular", "defeated", "talk", "elite", "letters", "steam", "growth", "kindly", "strengthen", "astonishing", "lamp", "quizzical", "instruct", "government", "hulking", "wrathful", "puffy", "determined", "health", "gather", "park", "wonder", "tasteful", "hurt", "ground", "wise", "roll", "lunchroom", "irritate", "legal", "living", "remarkable", "effect", "fabulous", "development", "able", "suggestion", "amusing", "subdued", "selection", "wave", "sponge", "equable", "party", "stitch", "dirty", "pollution", "spotty", "slippery", "tame", "proud", "doubt", "thick", "supply", "fail", "uncle", "responsible", "achiever", "thankful", "nose", "stiff", "quill", "market", "unable", "profit", "vigorous", "twig", "live", "spiritual", "whispering", "sick", "race", "vegetable", "writing", "linen", "gaping", "meat", "furtive", "eyes", "abhorrent", "delay", "jump", "swing", "quirky", "observe", "groovy", "overjoyed", "hungry", "decorous", "zonked", "easy", "educated", "incandescent", "divide", "nostalgic", "obtainable", "identify", "suit", "eager", "illustrious", "next", "blush", "nosy", "learn", "homely", "beneficial", "zippy", "soap", "plane", "week", "slimy", "little", "sloppy", "stove", "duck", "warm", "observation", "cool", "claim", "parched", "country", "store", "beautiful", "disagree", "grubby", "fuel", "bump", "inexpensive", "stuff", "prepare", "five", "ripe", "graceful", "truthful", "venomous", "rings", "purpose", "sneaky", "murky", "march", "sable", "border", "remain", "engine", "earsplitting", "faulty", "utter", "pies", "place", "gentle", "royal", "employ", "plot", "mind", "limping", "near", "wilderness", "guiltless", "exciting", "chief", "price", "troubled", "blot", "smooth", "island", "hook", "crawl", "pink", "abiding", "interesting", "cautious", "language", "fall", "strip", "abaft", "ludicrous", "mother", "tested", "thundering", "knowledgeable", "thank", "lace", "rifle", "reaction", "alert", "quixotic", "spurious", "receptive", "pretty", "arrange", "worried", "punishment", "delight", "anxious", "narrow", "geese", "protect", "verse", "size", "lighten", "agreeable", "aloof", "juicy", "press", "harm", "fortunate", "consider", "lopsided", "tacky", "boiling", "visitor", "statuesque", "appliance", "young", "distance", "crook", "acrid", "incompetent", "memory", "partner", "credit", "imperfect", "list", "aberrant", "innate", "current", "pancake", "pale", "imagine", "sweater", "hideous", "capable", "questionable", "strong", "repulsive", "announce", "basin", "realize", "mist", "muscle", "competition", "rude", "tearful", "raspy", "futuristic", "farm", "punish", "clean", "mute", "sugar", "guttural", "tent", "governor", "concentrate", "babies", "help", "thirsty", "writer", "statement", "neat", "steady", "rest", "gainful", "copy", "nimble", "fear", "jittery", "vacuous", "ball", "enchanting", "tidy", "angle", "hapless", "haircut", "bare", "vase", "enter", "thing", "drip", "gray", "rely", "grey", "destroy", "brawny", "paper", "deceive", "itch", "fancy", "ossified", "warlike", "unbecoming", "wire", "lacking", "torpid", "greedy", "melodic", "smart", "stamp", "optimal", "full", "weary", "stain", "label", "flawless", "ruin", "vague", "normal", "snails", "wash", "bruise", "hurried", "productive", "bury", "ubiquitous", "sweet", "wrong", "road", "elastic", "flag", "society", "stereotyped", "spotted", "airport", "river", "ceaseless", "cute", "soak", "healthy", "reach", "shrug", "subtract", "aquatic", "sense", "floor", "loving", "nasty", "wrestle", "waste", "dapper", "wretched", "activity", "pushy", "vulgar", "insect", "rustic", "weak", "advice", "zebra", "steadfast", "horse", "potato", "stew", "clear", "satisfying", "number", "known", "momentous", "plant", "branch", "dare", "recondite", "hydrant", "tired", "addicted", "magic", "water", "brother", "wait", "gaze", "sand", "elegant", "offbeat", "heavy", "broken", "abject", "alive", "deer", "wakeful", "knee", "unhealthy", "space", "driving", "material", "numerous", "maniacal", "future", "naive", "order", "enormous", "coat", "drum", "exchange", "violet", "discovery", "smelly", "butter", "lavish", "wail", "abandoned", "tray", "null", "stimulating", "share", "basket", "prick", "fallacious", "fool", "minute", "mouth", "dark", "huge", "relation", "bake", "frightening", "helpless", "flavor", "bath", "staking", "outrageous", "striped", "obnoxious", "name", "safe", "tart", "fascinated", "picayune", "cast", "hospital", "street", "wheel", "lumber", "tendency", "dance", "influence", "overconfident", "tooth", "natural", "channel", "stocking", "seemly", "standing", "destruction", "tank", "dramatic", "secretive", "terrify", "pumped", "double", "drop", "interest", "changeable", "shallow", "tremendous", "vengeful", "deserve", "available", "join", "green", "mysterious", "veil", "pastoral", "respect", "repeat", "instinctive", "kaput", "symptomatic", "heat", "ultra", "anger", "crayon", "lick", "scared", "learned", "kill", "tree", "bawdy", "nippy", "skillful", "racial", "phobic", "same", "crush", "daughter", "women", "left", "inquisitive", "committee", "cable", "property", "roomy", "position", "salty", "macabre", "weather", "accept", "bored", "icky", "flock", "billowy", "reading", "attack", "wholesale", "mammoth", "soup", "scribble", "recess", "chunky", "smoke", "strange", "mountain", "jaded", "nail", "keen", "rightful", "umbrella", "title", "hammer", "yellow", "cheap", "launch", "rainy", "lamentable", "polite", "loutish", "wrap", "precious", "imported", "moan", "balance", "fuzzy", "animated", "educate", "cakes", "previous", "pedal", "absorbed", "copper", "ajar", "railway", "stem", "assorted", "stream", "compete", "raise", "zesty", "mere", "adaptable", "malicious", "square", "guarded", "things", "vast", "side", "unusual", "heady", "different", "tongue", "spare", "detect", "open", "highfalutin", "holistic", "clammy", "front", "separate", "soggy", "hair", "thumb", "blow", "irate", "cobweb", "dreary", "decay", "touch", "terrible", "watery", "wealth", "hushed", "friends", "hole", "gusty", "fine", "secret", "glass", "ants", "rigid", "windy", "moldy", "design", "argument", "alike", "breakable", "cycle", "view", "bustling", "worm", "toad", "trap", "cattle", "show", "class", "watch", "carpenter", "power", "handle", "obese", "airplane", "nauseating", "precede", "dear", "tasty", "zephyr", "challenge", "public", "building", "funny", "hour", "bikes", "shape", "question", "comparison", "halting", "communicate", "useless", "ring", "complex", "silly", "macho", "eminent", "salt", "return", "nutty", "physical", "cows", "groan", "maid", "hypnotic", "squeeze", "route", "abstracted", "loaf", "knowing", "righteous", "poor", "defective", "sock", "disturbed", "machine", "beam", "cent", "heartbreaking", "meek", "vessel", "dizzy", "dashing", "brave", "shoes", "squeal", "roof", "parsimonious", "various", "fluttering", "chalk", "argue", "horrible", "shock", "godly", "creepy", "dangerous", "calm", "feeling", "perfect", "adjoining", "miss", "lyrical", "perpetual", "radiate", "erect", "pickle", "evanescent", "abrasive", "night", "ready", "discover", "eggnog", "print", "stale", "bait", "sisters", "jeans", "dazzling", "hate", "wound", "church", "languid", "chew", "education", "unknown", "school", "intelligent", "invite", "point", "suspend", "spiky", "quarter", "didactic", "wiggly", "gold", "encouraging", "chicken", "satisfy", "scintillating", "cagey", "harbor", "contain", "relieved", "desire", "acidic", "waiting", "cushion", "brush", "annoyed", "grandiose", "fade", "doctor", "shirt", "fragile", "sore", "suck", "please", "sheet", "smash", "faded", "caring", "screw", "average", "incredible", "majestic", "pray", "equal", "phone", "familiar", "erratic", "knit", "month", "straw", "magenta", "reject", "noxious", "song", "degree", "flowery", "carriage", "bomb", "confuse", "befitting", "analyze", "beginner", "abashed", "peaceful", "improve", "damaging", "back", "middle", "reign", "trouble", "berserk", "hill", "limit", "zany", "soothe", "account", "better", "protest", "spade", "mailbox", "sordid", "needless", "frame", "mask", "flippant", "wing", "plausible", "abusive", "squirrel", "introduce", "entertaining", "garrulous", "animal", "tempt", "industry", "burly", "excuse", "action", "abundant", "cannon", "apologise", "pretend", "luxuriant", "exultant", "smoggy", "puzzling", "meeting", "habitual", "popcorn", "panoramic", "magnificent", "cause", "soft", "painful", "giant", "numberless", "amount", "ratty", "childlike", "wrist", "chase", "fire", "spiders", "sleep", "premium", "trick", "overt", "trade", "annoy", "hollow", "found", "puny", "deeply", "force", "true", "chess", "muddled", "arithmetic", "motion", "edge", "slow", "line", "deafening", "good", "towering", "messy", "guide", "handy", "instrument", "tall", "conscious", "mitten", "battle", "bedroom", "peel", "books", "picture", "depressed", "invincible", "trucks", "treatment", "grin", "dislike", "complete", "teaching", "complain", "greet", "amuck", "summer", "telling", "spiffy", "tight", "play", "needy", "maddening", "victorious", "system", "circle", "cloistered", "plucky", "time", "obeisant", "debonair", "vivacious", "motionless", "snatch", "repair", "elfin", "fowl", "secretary", "coal", "present", "feigned", "earn", "rabid", "lonely", "pipe", "pigs", "yell", "kind", "fluffy", "oven", "purring", "theory", "foot", "rule", "wipe", "float", "auspicious", "wind", "morning", "quilt", "dead", "trail", "squalid", "calculate", "noisy", "unlock", "piquant", "awesome", "tease", "spray", "underwear", "innocent", "somber", "nerve", "abounding", "uptight", "upbeat", "concerned", "panicky", "psychedelic", "disappear", "relax", "slave", "three", "stretch", "steer", "close", "overrated", "laugh", "songs", "weight", "quack", "form", "reminiscent", "lazy", "surprise", "protective", "delicate", "crib", "whistle", "report", "stomach", "efficient", "resonant", "loud", "boat", "locket", "post", "nine", "heal", "blind", "bewildered", "flaky", "cherries", "pause", "cynical", "shiny", "quiet", "petite", "stingy", "sturdy", "awful", "lush", "iron", "ticket", "tickle", "volcano", "cheerful", "threatening", "guard", "fertile", "sound", "mend", "answer", "legs", "temporary", "shrill", "bore", "outstanding", "cover", "utopian", "rare", "sedate", "throat", "womanly", "misty", "representative", "allow", "sleet", "brass", "level", "certain", "mass", "unequaled", "sour", "tenuous", "sticky", "bolt", "actually", "crabby", "efficacious", "flap", "thaw", "program", "important", "bashful", "faint", "trashy", "comfortable", "envious", "cloudy", "ghost", "guess", "sniff", "stroke", "wary", "chubby", "friendly", "crime", "eatable", "throne", "clever", "scorch", "dream", "plantation", "uppity", "crate", "magical", "woozy", "distinct", "library", "wren", "ablaze", "pump", "judicious", "roasted", "income", "silky", "root", "toothpaste", "taboo", "camera", "peace", "lumpy", "measly", "polish", "snobbish", "thought", "jazzy", "playground", "cooperative", "fork", "organic", "black", "spill", "sink", "scrub", "hose", "pocket", "overflow", "grieving", "vest", "refuse", "gratis", "uneven", "fish", "industrious", "crowd", "aggressive", "itchy", "dusty", "spark", "remove", "draconian", "desert", "absurd", "belong", "medical", "acceptable", "cumbersome", "obedient", "toys", "receive", "shivering", "land", "nifty", "rush", "synonymous", "damage", "oatmeal", "straight", "scary", "wasteful", "mundane", "grandmother", "gleaming", "sigh", "birds", "internal", "replace", "religion", "husky", "tramp", "super", "wandering", "wicked", "ignore", "book", "fang", "fierce", "woebegone", "downtown", "succeed", "giraffe", "prefer", "stir", "turkey", "immense", "plug", "station", "behavior", "bear", "hover", "buzz", "harsh", "mountainous", "modern", "deep", "afterthought", "tangy", "arch", "apathetic", "vanish", "filthy", "multiply", "afternoon", "past", "spicy", "exercise", "release", "robin", "blade", "breezy", "string", "nutritious", "testy", "ambiguous", "even", "meaty", "awake", "fact", "risk", "approve", "wreck", "poison", "ritzy", "drunk", "permit", "business", "desk", "pass", "travel", "experience", "obsolete", "examine", "hysterical", "pets", "stick", "subsequent", "birth", "pull", "sail", "toothsome", "scent", "cars", "company", "collect", "grotesque", "attract", "undesirable", "flight", "oceanic", "valuable", "knowledge", "arrive", "tiresome", "frantic", "unsuitable", "girls", "waggish", "kettle", "walk", "tacit", "winter", "frightened", "common", "agonizing", "shoe", "addition", "sort", "witty", "load", "hang", "clover", "explode", "defiant", "cake", "jail", "leather", "arrogant", "stormy", "nonchalant", "serious", "probable", "comb", "recognise", "expect", "grain", "hallowed", "bridge", "marvelous", "belligerent", "voyage", "cluttered", "sulky", "mighty", "bone", "marked", "yielding", "sparkle", "prose", "notebook", "electric", "succinct", "unsightly", "whine", "serve", "excited", "verdant", "dolls", "cheat", "thrill", "neck", "grouchy", "value", "long", "curve", "decide", "bead", "obtain", "history", "thoughtful", "love", "stare", "doubtful", "correct", "excite", "approval", "shiver", "minor", "star", "best", "creature", "ship", "push", "romantic", "cure", "territory", "carry", "mourn", "horses", "mindless", "delicious", "drab", "blushing", "resolute", "yoke", "cowardly", "careful", "club", "collar", "tail", "zealous", "hissing", "peck", "spotless", "rough", "chin", "rotten", "powder", "possessive", "snakes", "burn", "rejoice", "preach", "humor", "crowded", "knock", "dinner", "paddle", "embarrass", "switch", "automatic", "afraid", "aboard", "embarrassed", "amazing", "unite", "supreme", "bleach", "giants", "porter", "change", "tangible", "knotty", "abrupt", "rake", "worthless", "hurry", "rural", "jellyfish", "door", "wall", "wood", "group", "scene", "last", "frogs", "sofa", "exuberant", "manage", "fearless", "charge", "surround", "aware", "great", "teeth", "round", "noise", "skin", "combative", "rampant", "miniature", "heavenly", "male", "snail", "earthquake", "pleasant", "charming", "wrench", "domineering", "rhythm", "wriggle", "wink", "hateful", "division", "glow", "shake", "squealing", "disgusting", "compare", "notice", "worry", "noiseless", "second", "twist", "cemetery", "orange", "measure", "onerous", "tedious", "trains", "impossible", "angry", "truculent", "bumpy", "person", "sidewalk", "general", "unarmed", "gamy", "solid", "flat", "cloth", "quaint", "scissors", "trousers", "handsomely", "flow", "direction", "arrest", "lock", "chivalrous", "mine", "pricey", "wealthy", "trust", "head", "bulb", "rail", "curvy", "license", "bucket", "confess", "dock", "eight", "aspiring", "yawn", "upset", "swift", "needle", "fantastic", "appear", "fair", "request", "explain", "crazy", "smiling", "simple", "spell", "suffer", "possible", "glamorous", "stage", "damaged", "discreet", "scandalous", "decisive", "crown", "mixed", "moaning", "sneeze", "badge", "coach", "callous", "range", "vein", "high", "card", "seashore", "stop", "trees", "board", "call", "stone", "gate", "home", "memorize", "periodic", "political", "monkey", "lively", "hard", "follow", "friction", "clumsy", "colossal", "snake", "children", "stranger", "loose", "train", "labored", "abnormal", "cellar", "daffy", "disillusioned", "volatile", "ugly", "amused", "silent", "wide", "disapprove", "test", "colour", "start", "rebel", "reduce", "lackadaisical", "handsome", "belief", "brief", "unfasten", "preserve", "aboriginal", "expansion", "celery", "detail", "amuse", "boundless", "debt", "adjustment", "planes", "calculator", "dirt", "tough", "squash", "shade", "sophisticated", "joke", "sticks", "punch", "cross", "matter", "deserted", "materialistic", "caption", "cream", "sack", "longing", "gifted", "coordinated", "believe", "decision", "unnatural", "teeny", "donkey", "marble", "melted", "versed", "event", "kittens", "scattered", "word", "melt", "curl", "cactus", "digestion", "juvenile", "clam", "slope", "jewel", "lean", "peep", "spectacular", "lowly", "short", "knife", "bang", "warn", "jumbled", "ahead", "cold", "hilarious", "rose", "inconclusive", "fill", "rainstorm", "house", "many", "crash", "texture", "axiomatic", "yarn", "heap", "economic", "encourage", "homeless", "amusement", "wander", "loss", "stupid", "classy", "ambitious", "right", "reply", "hellish", "frog", "scale", "overwrought", "apparatus", "literate", "busy", "adamant", "lettuce", "daily", "bathe", "quickest", "practice", "alleged", "ragged", "tightfisted", "wonderful", "makeshift", "ethereal", "whisper", "quartz", "spring", "team", "hobbies", "special", "tomatoes", "lethal", "flesh", "scrape", "insurance", "agree", "apparel", "breath", "smell", "applaud", "kneel", "famous", "bright", "steep", "tricky", "dress", "shelf", "tense", "pail", "expert", "mate", "opposite", "laughable", "bless", "glue", "expand", "knot", "gullible", "savory", "fruit", "bells", "naughty", "grass", "boil", "baby", "thoughtless", "note", "spot", "deadpan", "enthusiastic", "hope", "screeching", "possess", "fold", "remember", "empty", "stupendous", "infamous", "imminent", "connection", "baseball", "honey", "self", "fixed", "offer", "enjoy", "concern", "fetch", "army", "eggs", "fretful", "fairies", "cheese", "attach", "poised", "juice", "interrupt", "deranged", "crow", "cough", "structure", "impress", "gruesome", "queen", "nonstop", "military", "swanky", "willing", "acoustics", "drink", "freezing", "scarecrow", "wacky", "impolite", "lake", "alcoholic", "idiotic", "harmony", "blink", "happen", "pick", "attractive", "substance", "sprout", "milk", "small", "adhesive", "oranges", "capricious", "grab", "hesitant", "permissible", "rapid", "scrawny", "curly", "humdrum", "damp", "fence", "distribution", "care", "wooden", "pine", "telephone", "glorious", "girl", "pinch", "reason", "milky", "marry", "gaudy", "temper", "unit", "page", "coil", "parcel", "unaccountable", "disastrous", "unkempt", "curious", "boot", "fumbling", "furniture", "light", "zoom", "kick", "mean", "nappy", "large", "excellent", "wobble", "paste", "consist", "thin", "ladybug", "crooked", "admire", "simplistic", "penitent", "private", "pizzas", "film", "pour", "welcome", "therapeutic", "decorate", "rescue", "grandfather", "kitty", "reflect", "houses", "ad hoc", "creator", "treat", "look", "whirl", "four", "brown", "chop", "ancient", "breathe", "calculating", "married", "existence", "minister", "unpack", "devilish", "disarm", "window", "sparkling", "thinkable", "calendar", "miscreant", "imaginary", "escape", "strap", "nebulous", "obsequious", "shame", "barbarous", "murder", "fireman", "grateful", "crack", "joyous", "gorgeous", "wiry", "authority", "servant", "exotic", "mushy", "selfish", "ocean", "taste", "madly", "pack", "observant", "chemical", "regret", "gabby", "spoon", "cracker", "honorable", "entertain", "button", "borrow", "depend", "field", "oval", "disgusted", "talented", "thread", "diligent", "voracious", "ducks", "invention", "flash", "direful", "vacation", "corn", "flagrant", "grumpy", "humorous", "insidious", "likeable", "enchanted", "poke", "rate", "work", "tiny", "soda", "need", "wine", "sudden", "scientific", "tasteless", "develop", "puzzled", "want", "tawdry", "quiver", "cart", "offend", "stay", "spooky", "massive", "scare", "choke", "weigh", "blood", "connect", "tranquil", "pathetic", "aunt", "drown", "increase", "purple", "tender", "dogs", "pointless", "sweltering", "shut", "bike", "muddle", "paltry", "descriptive", "ashamed", "tick", "greasy", "rambunctious", "tour", "squeamish", "trip", "queue", "flame", "attraction", "demonic", "story", "dependent", "fearful", "town", "redundant", "coast", "bite", "prevent", "aromatic", "functional", "produce", "jobless", "nondescript", "check", "plate", "moon", "cultured", "difficult", "describe", "confused", "rain", "bottle", "skip", "boorish", "undress", "brick", "command", "prickly", "elated", "foamy", "shop", "rabbits", "plough", "tire", "dull", "parallel", "pencil", "happy", "scatter", "control", "cooing", "tumble", "bell", "birthday", "scarce", "historical", "office", "rich", "thunder", "late", "necessary", "impulse", "seat", "frighten", "goofy", "suppose", "furry", "forgetful", "fanatical", "slap", "remind", "acid", "room", "mature", "idea", "reproduce", "sign", "expensive", "spoil", "beds", "jagged", "helpful", "cruel", "frequent", "absent", "alluring", "part", "chilly", "mint", "whole", "skate", "bloody", "scream", "drain", "mark", "tiger", "meal", "type", "pleasure", "basketball", "uninterested", "advertisement", "receipt", "sassy", "unused", "voice", "flood", "broad", "painstaking", "match", "nation", "nest", "truck", "lame", "suggest", "color", "seal", "merciful", "cheer", "doll", "trace", "steel", "acoustic", "dispensable", "harass", "typical", "brake", "endurable", "reflective", "attempt", "guitar", "foolish", "burst", "superb", "rhyme", "annoying", "colorful", "understood", "accessible", "condition", "suspect", "science", "giddy", "face", "sheep", "waves", "cherry", "jolly", "silver", "plan", "splendid", "unwieldy", "vagabond", "canvas", "plants", "seed", "false", "boring", "courageous", "invent", "woman", "wanting", "scratch", "inject", "sincere", "liquid", "tremble", "gigantic", "money", "unwritten", "condemned", "mice", "riddle", "meddle", "flower", "unique", "chickens", "unadvised", "harmonious", "pest", "kindhearted", "quarrelsome", "youthful", "adorable", "ruthless", "yard", "clap", "settle", "holiday", "zinc", "carve", "agreement", "accurate", "jumpy", "neighborly", "advise", "dynamic", "white", "lucky", "cave", "actor", "exist", "disagreeable", "violent", "toothbrush", "extend", "grate", "wish", "trot", "absorbing"];

// game trackers
let word;
let gameOver = false;
let correctGuesses = 0;
let timesWrong = 0;
let usedLetters = [];
let validLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

const hangStages = ['./images/phase_0.png', './images/phase_1.png', './images/phase_2.png', './images/phase_3.png', './images/phase_4.png', './images/phase_5.png', './images/phase_6.png'];

// the different update messages that can be displayed
const goodUpdates = ['Correct!', 'Nice!', 'Looking good...', 'Not bad!', 'Maybe you\'re a hero?', 'Yep that\'s in there...'];
const badUpdates = ['Wrong!', 'Are you trying to lose?', 'Nice try...', 'Nope!', 'Poor guy...', 'Incorrect!', 'Maybe the next one?'];

// html elements

// below header
const messageArea = document.querySelector('.game-update'); // holds update messages
let updateMessage = document.querySelector('.game-update > p'); // gives user a message after input
let replay = document.createElement('p'); // displays when game is over; tells user what to do next

// play area
let image = document.querySelector('img'); // changes the state of the man
const incorrectArea = document.querySelector('.incorrect-letters'); // holds incorrect guesses

// word/input area
const wordArea = document.querySelector('.current-word'); // holds letters to the current word
let input = document.querySelector('input'); // the input area


// keeps page from refreshing after entering input
function handleSubmit() { e.preventDefault() }

// gets a random word
function getWord() {
    return words[Math.floor(Math.random() * words.length)];
}

// loads a word onto screen
function playGame() {
    word = getWord();
    generateLetters();
}

// creates the letter blanks on the screen
const numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
function generateLetters() {
    for (let i = 0; i < word.length; i++) {
        // create a letter
        const letter = document.createElement('div');
        letter.classList.add('letter');
        letter.classList.add(`${numbers[i]}`);

        // add a blank area for the letter and an underline
        const blank = document.createElement('div');
        const dash = document.createElement('img');
        dash.src = './images/blank_letter.png';

        // add to DOM
        letter.appendChild(blank);
        letter.appendChild(dash);
        wordArea.appendChild(letter);
    }
}

// listens for keyboard input and handles accordingly
window.addEventListener('keydown', (e) => {
    // if the game is over
    if (gameOver) { replayGame(); }
    // if a letter was pressed changed value of current input
    else if (validLetters.includes(e.key) || usedLetters.includes(e.key)) { input.value = e.key; }
    // if enter is pressed, submit the input value
    else if (e.key === 'Enter') { 
        e.preventDefault();
        handleInput();
    }
    else if (e.key === 'Backspace') { input.value = ''; }
});

// calls appropriate functions depending on the input
function handleInput() {
    let wordArry = Array.from(word);
    
    // if blank input do nothing
    if (input.value === '' || input.value === " ") { return; }
    // if already guessed
    else if (usedLetters.includes(input.value)) { 
        updateMessage.textContent = 'You already guessed that!'; 
        updateMessage.style.color = '#fff';
    }
    // if correct guess
    else if (wordArry.includes(input.value)) { correctGuess(wordArry); }
    // if incorrect guess
    else { incorrectGuess(); }
    
    updateBoard();
    // prompts user what to do next if game over
    if (gameOver) {
        replay.textContent = 'Enter any key to replay.'
        messageArea.appendChild(replay);
    }
}

// if the user guessed correctly
function correctGuess(wordArry) {
    for (let i = 0; i < word.length; i++) {
        // fill in the blank wherever the letters match
        if (input.value === wordArry[i]) {
            let letter = document.querySelector(`.letter.${numbers[i]}`);
            letter.firstElementChild.textContent = input.value;
            correctGuesses++;
        }
    }
    updateMessage.textContent = goodUpdates[Math.floor(Math.random() * goodUpdates.length)];
    updateMessage.style.color = '#00ff00';
}

// if the user guessed incorrectly
function incorrectGuess() {
    timesWrong++;
    // change the image's stage
    image.src = hangStages[timesWrong];
    // add the incorrect guess to the proper area
    const incorrectLetter = document.createElement('div');
    incorrectLetter.textContent = input.value;
    incorrectArea.appendChild(incorrectLetter);

    updateMessage.textContent = badUpdates[Math.floor(Math.random() * badUpdates.length)];
    updateMessage.style.color = '#ff0000';
}

// update how the board looks and update some values
function updateBoard() {
    // add the most recent guess to usedLetters and removed it from valid letters
    usedLetters.push(input.value);
    validLetters = validLetters.filter(letter => letter !== input.value);

    input.value = '';

    // check if the game is over
    if (correctGuesses === word.length) {
        gameOver = true;
        playerWin();
    } else if (timesWrong === 6) {
        playerLose();
        gameOver = true;
    }
}

function playerWin() {
    updateMessage.textContent = 'Way to go! You win!';
    updateMessage.style.color = '#00ff00';
}

function playerLose() {
    updateMessage.textContent = `Booo, you lost! The correct word was "${word}".`;
    updateMessage.style.color = '#ff0000';
}

// resets everything necessary to start and play a new game
function replayGame() {
    gameOver = false;
    correctGuesses = 0;
    timesWrong = 0;
    image.src = hangStages[0];
    validLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    usedLetters = [];
    updateMessage.textContent = 'Guess a letter!';
    updateMessage.style.color = '#fff';
    replay.textContent = '';
    wordArea.innerHTML = '';
    incorrectArea.innerHTML = '';

    playGame();
}

playGame();
