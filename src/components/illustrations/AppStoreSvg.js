import * as React from "react"
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg"

const SvgComponent = (props) => (
    <Svg
        width={146}
        height={46}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="M144.953 40.558c0 2.434-1.853 4.405-4.146 4.405H5.115c-2.292 0-4.152-1.971-4.152-4.405V5.434c0-2.433 1.86-4.41 4.152-4.41h135.691c2.294 0 4.146 1.977 4.146 4.41l.001 35.124Z"
            fill="#fff"
        />
        <Path
            d="M140.807 45.987H5.114C2.294 45.987 0 43.553 0 40.558V5.435C0 2.438 2.295 0 5.114 0h135.692c2.816 0 5.114 2.438 5.114 5.435v35.123c.002 2.995-2.296 5.43-5.113 5.43Z"
            fill="#A6A6A6"
        />
        <Path
            d="M144.953 40.558c0 2.434-1.853 4.405-4.146 4.405H5.115c-2.292 0-4.152-1.971-4.152-4.405V5.434c0-2.433 1.86-4.41 4.152-4.41h135.691c2.294 0 4.146 1.977 4.146 4.41l.001 35.124Z"
            fill="#000"
        />
        <Path
            d="M32.583 22.752c-.032-3.707 2.854-5.51 2.986-5.594-1.635-2.533-4.167-2.88-5.057-2.907-2.128-.238-4.191 1.353-5.275 1.353-1.105 0-2.774-1.33-4.572-1.291-2.315.038-4.48 1.463-5.667 3.675-2.45 4.512-.623 11.142 1.725 14.788 1.174 1.787 2.547 3.78 4.343 3.71 1.757-.076 2.414-1.19 4.535-1.19 2.1 0 2.717 1.19 4.55 1.145 1.885-.03 3.073-1.794 4.206-3.596 1.358-2.046 1.903-4.063 1.924-4.166-.043-.016-3.662-1.486-3.698-5.927ZM29.122 11.852c.945-1.257 1.592-2.967 1.413-4.702-1.368.064-3.08 1.006-4.065 2.235-.871 1.084-1.65 2.86-1.449 4.529 1.537.122 3.115-.825 4.101-2.062Z"
            fill="#fff"
        />
        <Path
            d="M140.807 0H68.126l28.468 45.987h44.213c2.816 0 5.114-2.434 5.114-5.432V5.435C145.922 2.438 143.624 0 140.807 0Z"
            fill="url(#a)"
        />
        <Path
            d="M58.038 36.23h-2.456l-1.345-4.496H49.56L48.28 36.23h-2.391l4.634-15.304h2.861l4.655 15.305Zm-4.207-6.382-1.217-3.996c-.128-.408-.37-1.37-.725-2.883h-.043c-.143.65-.371 1.612-.684 2.883l-1.196 3.996h3.865ZM69.932 30.576c0 1.877-.479 3.36-1.438 4.45-.859.969-1.926 1.453-3.2 1.453-1.374 0-2.362-.521-2.962-1.565v5.79h-2.306V28.821c0-1.179-.03-2.387-.086-3.627h2.028l.129 1.75h.043c.77-1.319 1.936-1.978 3.502-1.978 1.224 0 2.246.514 3.064 1.544.816 1.031 1.226 2.386 1.226 4.066Zm-2.349.09c0-1.074-.227-1.96-.683-2.658-.499-.726-1.168-1.089-2.008-1.089-.568 0-1.085.202-1.547.601-.463.403-.766.928-.907 1.58a3.39 3.39 0 0 0-.108.746v1.84c0 .803.232 1.48.695 2.034.463.552 1.064.83 1.804.83.868 0 1.544-.358 2.028-1.068.484-.712.726-1.65.726-2.816ZM81.869 30.576c0 1.877-.48 3.36-1.439 4.45-.86.969-1.926 1.453-3.2 1.453-1.374 0-2.363-.521-2.963-1.565v5.79h-2.306V28.821c0-1.179-.029-2.387-.085-3.627h2.028l.129 1.75h.043c.768-1.319 1.934-1.978 3.502-1.978 1.223 0 2.245.514 3.064 1.544.816 1.031 1.227 2.386 1.227 4.066Zm-2.35.09c0-1.074-.228-1.96-.685-2.658-.498-.726-1.166-1.089-2.005-1.089-.569 0-1.086.202-1.55.601-.462.403-.764.928-.906 1.58-.07.303-.108.55-.108.746v1.84c0 .803.233 1.48.693 2.034.463.551 1.064.83 1.806.83.87 0 1.546-.358 2.028-1.068.485-.712.727-1.65.727-2.816ZM95.214 31.936c0 1.303-.429 2.363-1.28 3.18-.936.893-2.244 1.34-3.92 1.34-1.549 0-2.79-.317-3.727-.953l.533-2.044a6.125 6.125 0 0 0 3.331.955c.87 0 1.546-.21 2.028-.625.483-.416.728-.973.728-1.667 0-.622-.202-1.143-.6-1.568-.398-.423-1.058-.817-1.985-1.18-2.52-.999-3.78-2.46-3.78-4.383 0-1.256.445-2.284 1.334-3.088.889-.803 2.068-1.204 3.534-1.204 1.31 0 2.401.242 3.267.726l-.578 2c-.816-.47-1.736-.705-2.766-.705-.813 0-1.451.213-1.907.636-.384.379-.579.84-.579 1.387 0 .604.222 1.105.663 1.499.383.362 1.081.756 2.091 1.18 1.24.53 2.15 1.15 2.733 1.86.588.711.88 1.598.88 2.654ZM102.857 27.034h-2.541v5.358c0 1.363.448 2.042 1.345 2.042.412 0 .754-.036 1.024-.113l.064 1.861c-.454.18-1.052.272-1.793.272-.911 0-1.622-.296-2.136-.887-.511-.591-.769-1.581-.769-2.975v-5.563h-1.514v-1.84h1.514v-2.02l2.265-.727v2.747h2.541v1.845ZM114.302 30.62c0 1.697-.457 3.09-1.367 4.179-.953 1.121-2.221 1.68-3.801 1.68-1.525 0-2.737-.537-3.641-1.61-.904-1.075-1.356-2.43-1.356-4.064 0-1.71.467-3.11 1.398-4.2.933-1.09 2.19-1.635 3.77-1.635 1.523 0 2.746.538 3.672 1.612.884 1.042 1.325 2.387 1.325 4.039Zm-2.391.057c0-1.01-.205-1.878-.617-2.603-.483-.877-1.176-1.315-2.072-1.315-.924 0-1.632.438-2.114 1.315-.414.725-.619 1.607-.619 2.65 0 1.011.205 1.88.619 2.604.498.876 1.194 1.314 2.094 1.314.882 0 1.573-.447 2.072-1.336.424-.743.637-1.616.637-2.629ZM121.799 27.35a3.786 3.786 0 0 0-.727-.068c-.811 0-1.438.325-1.88.978-.383.575-.575 1.302-.575 2.18v5.79h-2.306v-7.56c0-1.271-.023-2.43-.067-3.475h2.008l.085 2.112h.064c.244-.726.627-1.311 1.152-1.75.514-.394 1.069-.59 1.667-.59.213 0 .406.015.576.044l.003 2.34ZM132.111 30.19c0 .44-.027.81-.085 1.112h-6.917c.026 1.09.361 1.925 1.004 2.5.583.513 1.336.77 2.262.77 1.024 0 1.959-.172 2.799-.52l.361 1.7c-.982.456-2.141.682-3.479.682-1.609 0-2.872-.503-3.792-1.508-.917-1.007-1.376-2.36-1.376-4.053 0-1.663.427-3.049 1.282-4.154.896-1.18 2.106-1.77 3.629-1.77 1.495 0 2.628.59 3.397 1.77.609.935.915 2.094.915 3.47Zm-2.199-.636c.016-.728-.135-1.355-.448-1.885-.399-.683-1.013-1.024-1.836-1.024-.754 0-1.368.333-1.835 1-.384.53-.613 1.167-.683 1.907l4.802.002ZM52.72 15.448H51.51l-.66-2.21h-2.299l-.63 2.21h-1.176l2.278-7.522h1.406l2.29 7.522Zm-2.069-3.136-.598-1.964a30.64 30.64 0 0 1-.357-1.417h-.021c-.074.323-.179.792-.337 1.417l-.587 1.964h1.9ZM58.414 10.024l-1.931 5.424H55.38l-1.87-5.424h1.218l.872 2.869c.147.48.273.937.367 1.371h.031c.084-.39.21-.847.367-1.371l.86-2.869h1.188ZM62.526 15.448l-.084-.625h-.031c-.346.503-.85.748-1.49.748-.913 0-1.565-.681-1.565-1.596 0-1.339 1.092-2.031 2.981-2.031v-.1c0-.714-.357-1.072-1.06-1.072-.504 0-.945.134-1.332.402l-.23-.792c.472-.313 1.06-.47 1.752-.47 1.333 0 2.006.748 2.006 2.244v1.998c0 .547.021.972.073 1.295l-1.02-.001Zm-.158-2.702c-1.26 0-1.889.325-1.889 1.094 0 .57.325.848.776.848.578 0 1.113-.468 1.113-1.104v-.838ZM65.997 9.131c-.378 0-.672-.313-.672-.726s.304-.714.693-.714c.389 0 .703.301.693.714 0 .436-.293.726-.714.726Zm.588 6.317h-1.133v-5.424h1.133v5.424ZM69.732 15.448h-1.133V7.536h1.133v7.912ZM74.549 15.448l-.085-.625h-.031c-.346.503-.85.748-1.49.748-.913 0-1.564-.68-1.564-1.596 0-1.339 1.091-2.031 2.98-2.031v-.1c0-.714-.356-1.072-1.06-1.072-.503 0-.945.135-1.332.403l-.231-.794c.472-.313 1.06-.47 1.753-.47 1.332 0 2.005.748 2.005 2.245v1.997c0 .547.023.972.072 1.295H74.55Zm-.158-2.701c-1.26 0-1.89.324-1.89 1.093 0 .57.326.848.777.848.578 0 1.113-.468 1.113-1.104v-.837ZM80.086 15.57c-.724 0-1.258-.323-1.604-.96h-.023l-.065.838h-.965c.031-.435.042-.927.042-1.462v-6.45h1.134v3.282h.022c.336-.603.88-.904 1.627-.904 1.228 0 2.089 1.117 2.089 2.745 0 1.684-.956 2.912-2.257 2.912Zm-.23-4.71c-.653 0-1.25.603-1.25 1.44v.95c0 .747.537 1.36 1.23 1.36.849 0 1.354-.735 1.354-1.907-.001-1.094-.527-1.842-1.334-1.842ZM85.152 15.448h-1.133V7.536h1.133v7.912ZM91.322 13.026H87.92c.022 1.027.66 1.607 1.606 1.607.504 0 .965-.09 1.374-.257l.176.837c-.482.223-1.049.335-1.71.335-1.596 0-2.54-1.072-2.54-2.734 0-1.663.967-2.913 2.413-2.913 1.301 0 2.12 1.027 2.12 2.579.005.211-.005.401-.037.546Zm-1.04-.86c0-.836-.398-1.427-1.123-1.427-.651 0-1.164.602-1.24 1.428h2.364ZM98.191 15.57c-1.49 0-2.456-1.183-2.456-2.79 0-1.673.987-2.867 2.542-2.867 1.467 0 2.456 1.127 2.456 2.78 0 1.694-1.019 2.878-2.542 2.878Zm.044-4.776c-.819 0-1.344.814-1.344 1.952 0 1.117.536 1.931 1.333 1.931.797 0 1.331-.87 1.331-1.954.001-1.104-.523-1.93-1.32-1.93ZM106.825 15.448h-1.132v-3.114c0-.96-.346-1.44-1.029-1.44-.671 0-1.134.614-1.134 1.328v3.226h-1.132v-3.873c0-.48-.012-.994-.043-1.552h.998l.053.838h.031c.303-.58.924-.95 1.616-.95 1.069 0 1.772.871 1.772 2.288v3.249ZM114.241 10.928h-1.247v2.634c0 .67.22 1.005.66 1.005.2 0 .369-.023.504-.056l.032.915c-.221.09-.516.135-.881.135-.893 0-1.426-.525-1.426-1.898v-2.735h-.744v-.903h.744V9.03l1.111-.358v1.35h1.247v.905ZM120.243 15.448h-1.134v-3.091c0-.97-.346-1.462-1.029-1.462-.587 0-1.132.424-1.132 1.283v3.27h-1.135V7.536h1.135v3.258h.022c.356-.591.871-.882 1.532-.882 1.08 0 1.741.892 1.741 2.31v3.226ZM126.035 13.026h-3.401c.021 1.027.659 1.607 1.604 1.607.505 0 .966-.09 1.375-.257l.177.837c-.482.223-1.05.335-1.711.335-1.596 0-2.54-1.072-2.54-2.734 0-1.663.967-2.913 2.413-2.913 1.301 0 2.121 1.027 2.121 2.579.004.211-.007.401-.038.546Zm-1.04-.86c0-.836-.398-1.427-1.122-1.427-.652 0-1.165.602-1.239 1.428h2.361Z"
            fill="#fff"
        />
        <Defs>
            <LinearGradient
                id="a"
                x1={107.025}
                y1={46.112}
                x2={107.025}
                y2={4.659}
                gradientUnits="userSpaceOnUse"
            >
                <Stop stopColor="#1A1A1A" stopOpacity={0.1} />
                <Stop offset={0.123} stopColor="#212121" stopOpacity={0.151} />
                <Stop offset={0.308} stopColor="#353535" stopOpacity={0.227} />
                <Stop offset={0.532} stopColor="#575757" stopOpacity={0.318} />
                <Stop offset={0.783} stopColor="#858585" stopOpacity={0.421} />
                <Stop offset={1} stopColor="#B3B3B3" stopOpacity={0.51} />
            </LinearGradient>
        </Defs>
    </Svg>
)

export default SvgComponent