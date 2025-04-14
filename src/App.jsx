import React from "react";

const App = () => {
  return (
    //1.Login/Logout Toggle
    //{isLoggedIn ? <LogoutButton /> : <LoginButton />}

    //2. Loading State
    // {isLoading ? <Spinner /> : <Content />}

    // 3 Error Message Display
    //{error ? <ErrorMessage message={error} /> : null}

    //4  Conditional Styling
    //<div className={isActive ? 'active' : 'inactive'} />

    //5 Show/Hide Element
    // {showDetails ? <Details /> : <ToggleButton />}

    //6 User Avatar Display
    //{user.avatar ? <img src={user.avatar} /> : <DefaultAvatar />}

    // 7 Admin Controls
    //  {user.isAdmin ? <AdminPanel /> : <UserDashboard />}

    // 8 Form Validation

    //<button disabled={!isValid ? true : false}>
    //Submit
    //</button>

    // 9 Empty List State
    //{items.length > 0 ? <List items={items} /> : <EmptyState />}

    // 10 Theme Switching
    //<div className={theme === 'dark' ? 'dark-theme' : 'light-theme'} />

    // 11 Time-based Greeting
    //<h1>{new Date().getHours() < 12 ? 'Good Morning' : 'Good Evening'}</h1>

    // 12 Edit/Save Toggle

    /* <button>
  {isEditing ? 'Save Changes' : 'Edit Profile'}
</button> */

    //Mobile/Desktop View
    //{isMobile ? <MobileMenu /> : <DesktopMenu />}

    //Verification Badge
    //{user.verified && <VerifiedBadge />}

    //Countdown Timer
    //{timeLeft > 0 ? <Timer time={timeLeft} /> : <TimeUpMessage />}

    //Multi-step Form
    //{step === 1 ? <Step1 /> : step === 2 ? <Step2 /> : <Confirmation />}

    //API Retry Button
    //{error ? <RetryButton onRetry={fetchData} /> : null}

    //  Selectable Items
    //{isSelectable ? <Checkbox /> : <ReadOnlyLabel />}

    // Modal Display
    //{showModal ? <Modal onClose={closeModal} /> : null}

    //Tab Conten
    //{activeTab === 'home' ? <HomeTab /> : <ProfileTab />}

    // Form Submission Feedback
    //{isSubmitted ? <SuccessMessage /> : <FormFields />}

    //Permission-based UI
    //{hasPermission ? <DeleteButton /> : <RequestAccessButton />}

    //Search Highlighting
    //{searchMatch ? <HighlightedText /> : <NormalText />}

    //Password Strength
    //{password.length > 8 ? <StrongPassword /> : <WeakPassword />}

    // Tooltip Visibility
    //{showTooltip ? <Tooltip text="Information" /> : null}

    // Theme Icon
    //{theme === 'dark' ? <MoonIcon /> : <SunIcon />}

    //Cart Counter
    //{cartItems.length > 0 ? <CartCount count={cartItems.length} /> : null}

    //Sidebar Toggle
    //{isSidebarOpen ? <Sidebar /> : <CollapsedSidebar />}

    //Upload Progress
    //{isUploading ? <ProgressBar progress={progress} /> : <UploadButton />}

    //Delete Confirmation
    //{showConfirmation ? <ConfirmDialog /> : <DeleteButton />}

    //New Item Badge
    //{isNewItem ? <NewBadge /> : null}

    //Carousel Controls
    //{hasMultipleItems ? <CarouselControls /> : null}

    //Content Restriction
    //{isSubscribed ? <PremiumContent /> : <SubscribePrompt />}

    //User Name Display
    //{user.fullName ? user.fullName : user.username}

    //Price Formatting
    //{isFree ? 'Free' : `$${price}`}

    //Image Placeholder
    //{imageUrl ? <img src={imageUrl} /> : <ImagePlaceholder />}

    //Rating Display
    //{rating ? <StarRating rating={rating} /> : 'Not rated yet'}

    //Conditional Header
    //{isHomePage ? <HomeHeader /> : <DefaultHeader />}

    //Scroll-to-Top Button
    //{showScrollTop ? <ScrollTopButton /> : null}

    //Online Status
    //<div className={isOnline ? 'online' : 'offline'} />

    //Footer Visibility
    //{shouldShowFooter ? <Footer /> : null}

    //Newsletter Subscription
    //{isSubscribed ? <ThankYouMessage /> : <NewsletterForm />}

    //  Profile Completion
    // {profileComplete ? <CompleteProfile /> : <ProfileProgress />}

    // Media Display
    //{hasVideo ? <VideoPlayer /> : <ImageGallery />}

    //Discount Banner
    ///{discount > 0 ? <DiscountBadge discount={discount} /> : null}

    //QR Code Display
    //{isMobileUser ? <QRCode /> : <DesktopInstructions />}

    //Data Visualization
    //{hasData ? <Chart data={data} /> : <DataTable data={data} />}

    //  Text Truncation
    //{isExpanded ? fullText : truncatedText}

    //Map Display
    // {hasLocation ? <Map coordinates={coords} /> : <LocationPrompt />}

    //  Tutorial Visibility
    //{showTutorial ? <TutorialGuide /> : <MainContent />}

    //  Dynamic Button Text
    //<button>{isProcessing ? 'Processing...' : 'Submit'}</button>

    // Responsive Image Source
    //<img src={isRetina ? highResImage : lowResImage} alt="Responsive" />

    //  Pagination Controls
    //{currentPage > 1 ? <PreviousPageButton /> : <PlaceholderDiv />}

    //Multi-Language Support
    //<h1>{lang === 'es' ? 'Bienvenido' : 'Welcome'}</h1>

    //Input Validation Feedback
    //{!isValidEmail ? <span className="error">Invalid Email</span> : null}

    //  Conditional Placeholder
    //<input placeholder={isOptional ? 'Optional Field' : 'Required Field'} />

    //  Dynamic List Item Key
    // {items.map(item => (
    //   <li key={item.id ? item.id : generateTempId()}>{item.name}</li>
    // ))}

    // Feature Flag Toggle
    //{flags.newDashboard ? <NewDashboard /> : <LegacyDashboard />}

    // Animation Trigger
    //<motion.div animate={isVisible ? 'visible' : 'hidden'} />

    // Optional Children
    //<Card>{hasHeader ? <CardHeader /> : null}</Card>

    //  Undo/Redo State
    //<button>{canUndo ? 'Undo' : 'Redo'}</button>

    // Draft vs. Published Content
    //{post.status === 'draft' ? <DraftBadge /> : <PublishedBadge />}

    //  Session Timeout Warning
    //{timeoutWarning ? <SessionAlert /> : <MainUI />}

    // Geolocation Display
    //{geolocationAllowed ? <Map /> : <LocationPermissionPrompt />}

    //  File Upload Status
    //{uploadStatus === 'failed' ? <RetryButton /> : <UploadProgress />}

    //Keyboard Shortcut Hint
    //{showShortcuts ? <KeyboardShortcuts /> : <ToggleHintButton />}

    //  Battery Status Indicator
    //{batteryLevel < 20 ? <LowBatteryIcon /> : <FullBatteryIcon />}

    // Conditional Local Storage
    //{useLocalStorage ? <LocalStorageComponent /> : <MemoryStorageComponent />}

    // OAuth Provider Selection
    //{authProvider === 'google' ? <GoogleLogin /> : <EmailLogin />}

    // Dark Mode Toggle (Context)
    //{theme === 'dark' ? <DarkModeIcon /> : <LightModeIcon />}

    <div>
      <h1>All ternary oparetors</h1>
    </div>
  );
};

export default App;
