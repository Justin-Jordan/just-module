<?php

namespace Drupal\just_mod\Plugin\Layout\Header;

use Drupal\Core\Layout\LayoutDefault;
use Drupal\formatage_models\Plugin\Layout\Sections\FormatageModelsSection;

/**
 * A very advanced custom layout.
 *
 * @Layout(
 *   id = "Plumbing_navbar",
 *   label = @Translation("Plumbing navbar"),
 *   category = @Translation("Plumbing Layout"),
 *   path = "layouts/header",
 *   template = "plumbing_navbar",
 *   library = "just_mod/plumbing_navbar",
 * )
 */
class PlumbingNavbar extends FormatageModelsSection
{
    /**
     *
     * {@inheritdoc}
     */
    public function defaultConfiguration()
    {
        return parent::defaultConfiguration();
    }
}
